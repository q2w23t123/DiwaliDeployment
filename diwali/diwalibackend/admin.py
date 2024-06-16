from django import forms
from django.apps import AppConfig
from django.contrib import admin
from django.http import HttpResponseRedirect
from django.utils.html import format_html

from adminsortable.admin import SortableAdmin, SortableStackedInline, NonSortableParentAdmin

from .models import Gallery, GalleryEmbed, GalleryLink, GalleryImage, CarouselImage, SponsorImage, SponsorSection, SponsorPage

def my_child_overrides(base):
	class MyChildOverrides(base):
		delete_confirmation_template = "templates/deletechild.html"
		def add_view(self, request, form_url="", extra_context=None):
			extra_context = extra_context or {}
			extra_context["add_child"] = True
			extra_context["parent_id"] = request.GET["parent_id"]
			return super().add_view(request, form_url, extra_context)
		def delete_view(self, request, object_id, extra_context=None):
			extra_context = extra_context or {}
			obj = self.model.objects.get(pk=object_id)
			extra_context["parent_model"] = obj.parent.__class__.__name__.lower()
			extra_context["parent_id"] = obj.parent.pk
			return super().delete_view(request, object_id, extra_context)
		def redirect_on_save(self, request, obj):
			if "_save" in request.POST:
				return HttpResponseRedirect(f'/admin/diwalibackend/{obj.parent.__class__.__name__.lower()}/{obj.parent.pk}/change/')
			elif "_addanother" in request.POST:
				return HttpResponseRedirect(f'/admin/diwalibackend/{obj.__class__.__name__.lower()}/add/?parent_id={obj.parent.pk}')
			else:
				return None
		def response_add(self, request, obj, post_url_continue=None):
			return self.redirect_on_save(request, obj) or super().response_add(request, obj, post_url_continue)
		def response_change(self, request, obj):
			return self.redirect_on_save(request, obj) or super().response_change(request, obj)
		def response_delete(self, request, obj_display, obj_id):
			return HttpResponseRedirect(f'/admin/diwalibackend/{request.POST["parent_model"]}/{request.POST["parent_id"]}/change/')
		def get_form(self, request, obj=None, **kwargs):
			baseform = super().get_form(request, obj, **kwargs)
			if obj is not None:
				# This is an existing item.
				# So we don't need to tweak the form, as we want to keep the existing parent.
				return baseform
			# The user is adding a new item.
			# So it needs to get a parent.  So add the parent field.
			class Form(baseform):
				class Meta(baseform.Meta):
					fields = baseform.Meta.fields + ['parent']
			return Form
		
		# Denying "module permission" means that the model won't show
		# up on the admin homepage.  You're supposed to edit this model
		# via its parent, not directly.
		def has_module_permission(self, request):
			return False
			
		# Similarly, denying "view permission" means that there won't
		# be a link to this model in the breadcrumbs.
		def has_view_permission(self, request, obj=None):
			return False
	return MyChildOverrides

class MyParentAdmin(NonSortableParentAdmin):
	change_form_template_extends = "templates/myadmin.html"
	class Media:
		css = {'all': ['css/admin/diwaliadmin.css']}
	def response_change(self, request, obj):
		for key in request.POST:
			if key.startswith("_add_child_"):
				child_model = key.split("_")[3]
				return HttpResponseRedirect(f'/admin/diwalibackend/{child_model}/add/?parent_id={obj.pk}')
		return super().response_change(request, obj)

class MyChildAdmin(my_child_overrides(admin.ModelAdmin)):
	change_form_template = "templates/myadmin.html"

class ImageAdmin(SortableAdmin):
	list_display = ["image", "image_url", "alternate_text"]
	fields = ["image", "image_url", "alternate_text"]
	readonly_fields = ["image"]

class ImageInline(SortableStackedInline):
	fields = ["image", "image_url", "alternate_text"]
	readonly_fields = ["image", "image_url", "alternate_text"]
	extra = 0
	show_change_link = True

class GalleryImageInline(ImageInline):
	model = GalleryImage

class SponsorImageInline(ImageInline):
	model = SponsorImage

class ChildImageAdmin(MyChildAdmin):
	fields = ["image", "image_url", "alternate_text"]
	readonly_fields = ["image"]

class GalleryLinkInline(SortableStackedInline):
	model = GalleryLink
	fields = ["image", "image_url", "headline", "link_url"]
	readonly_fields = ["image", "image_url", "headline", "link_url"]
	extra = 0
	show_change_link = True

class GalleryLinkAdmin(MyChildAdmin):
	fields = ["image", "image_url", "headline", "link_url"]
	readonly_fields = ["image"]

class GalleryEmbedInline(SortableStackedInline):
	model = GalleryEmbed
	fields = ["embed", "embed_url"]
	readonly_fields = ["embed", "embed_url"]
	extra = 0
	show_change_link = True

class GalleryEmbedAdmin(MyChildAdmin):
	fields = ["embed", "embed_url"]
	readonly_fields = ["embed"]

class GalleryAdmin(MyParentAdmin):
	fields = ["year", "full_date"]
	inlines = [GalleryEmbedInline, GalleryLinkInline, GalleryImageInline]

class SponsorSectionInline(SortableStackedInline):
	model = SponsorSection
	fields = ["title"]
	extra = 0
	show_change_link = True

class SponsorSectionAdmin(my_child_overrides(MyParentAdmin)):
	fields = ["title"]
	inlines = [SponsorImageInline]

class SponsorPageAdmin(MyParentAdmin):
	fields = ["year"]
	inlines = [SponsorSectionInline]

admin.site.register(Gallery, GalleryAdmin)
admin.site.register(GalleryEmbed, GalleryEmbedAdmin)
admin.site.register(GalleryLink, GalleryLinkAdmin)
admin.site.register(GalleryImage, ChildImageAdmin)
admin.site.register(SponsorImage, ChildImageAdmin)
admin.site.register(SponsorSection, SponsorSectionAdmin)
admin.site.register(SponsorPage, SponsorPageAdmin)
admin.site.register(CarouselImage, ImageAdmin)

