# Generated by Django 4.2.11 on 2024-06-11 12:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diwalibackend', '0008_alter_year_options_remove_year_the_order'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Year',
            new_name='Gallery',
        ),
        migrations.RenameField(
            model_name='galleryembed',
            old_name='year',
            new_name='gallery',
        ),
        migrations.RenameField(
            model_name='galleryimage',
            old_name='year',
            new_name='gallery',
        ),
        migrations.RenameField(
            model_name='gallerylink',
            old_name='year',
            new_name='gallery',
        ),
    ]
