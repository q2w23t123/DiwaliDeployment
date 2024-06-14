# Generated by Django 4.2.11 on 2024-05-22 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diwalibackend', '0003_gallerylink'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarouselImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_file', models.FileField(upload_to='')),
                ('alternate_text', models.CharField(default='', max_length=10000)),
                ('the_order', models.PositiveIntegerField(db_index=True, default=0, editable=False)),
            ],
            options={
                'ordering': ['the_order'],
                'abstract': False,
            },
        ),
        migrations.AlterModelOptions(
            name='galleryimage',
            options={'ordering': ['the_order']},
        ),
        migrations.AddField(
            model_name='galleryimage',
            name='alternate_text',
            field=models.CharField(default='', max_length=10000),
        ),
        migrations.AddField(
            model_name='galleryimage',
            name='the_order',
            field=models.PositiveIntegerField(db_index=True, default=0, editable=False),
        ),
    ]