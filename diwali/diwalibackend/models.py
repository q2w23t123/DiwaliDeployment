from django.db import models
from django.utils.html import format_html
from adminsortable.fields import SortableForeignKey
from adminsortable.models import SortableMixin

import inspect

class Gallery(models.Model):
	year = models.PositiveIntegerField(default=0, unique=True, db_index=True)
	full_date = models.CharField(max_length=500, default="")
	
	def __str__(self):
		return str(self.year)
	
	class Meta:
		verbose_name_plural = "Galleries"
		ordering = ['-year']

class GalleryLink(SortableMixin):
	image_url = models.CharField(max_length=10000)
	headline = models.CharField(max_length=500)
	link_url = models.CharField(max_length=10000)
	the_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)
	parent = SortableForeignKey(Gallery, on_delete=models.CASCADE)
	
	def image(self):
		return format_html('<img src="{}" alt="{}" style="width: auto; height: 200px;">', self.image_url, self.headline)
	
	def __str__(self):
		return f"{self.headline} - {self.link_url}"
	
	class Meta:
		ordering = ['the_order']

def in_sort_view():
	for frame in inspect.stack():
		if frame.function == "sort_view":
			return True
	return False

class GalleryEmbed(SortableMixin):
	embed_url = models.CharField(max_length=10000)
	the_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)
	parent = SortableForeignKey(Gallery, on_delete=models.CASCADE)
	
	def embed(self):
		return format_html('<iframe src="{}" width="560" height="315" style="pointer-events: none;"></iframe>', self.embed_url)
	
	def __str__(self):
		if in_sort_view():
			return self.embed()
		return self.embed_url
	
	class Meta:
		ordering = ['the_order']

class Image(SortableMixin):
	image_url = models.CharField(max_length=10000)
	alternate_text = models.CharField(max_length=10000, default="")
	the_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)
	
	def image(self):
		return format_html('<img src="{}" alt="{}" style="width: auto; height: 200px;">', self.image_url, self.alternate_text)

	def __str__(self):
		if in_sort_view():
			return self.image()
		return f"{self.image_url} ({self.alternate_text})"

	class Meta:
		abstract = True
		ordering = ['the_order']

class GalleryImage(Image):
	parent = SortableForeignKey(Gallery, on_delete=models.CASCADE)

class CarouselImage(Image):
	pass

class SponsorPage(models.Model):
	year = models.PositiveIntegerField(default=0, unique=True, db_index=True)
	
	def __str__(self):
		return str(self.year)
	
	class Meta:
		ordering = ['-year']

class SponsorSection(SortableMixin):
	parent = SortableForeignKey(SponsorPage, on_delete=models.CASCADE)
	title = models.CharField(max_length=500)
	the_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)
	
	def __str__(self):
		return self.title
	
	class Meta:
		ordering = ['the_order']

class SponsorImage(Image):
	parent = SortableForeignKey(SponsorSection, on_delete=models.CASCADE)

