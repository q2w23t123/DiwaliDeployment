# Generated by Django 4.2.11 on 2024-06-11 12:20

import adminsortable.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('diwalibackend', '0006_alter_galleryembed_options_alter_gallerylink_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.PositiveIntegerField(db_index=True, default=0, unique=True)),
                ('the_order', models.PositiveIntegerField(db_index=True, default=0, editable=False)),
            ],
            options={
                'ordering': ['the_order'],
            },
        ),
        migrations.AddField(
            model_name='galleryembed',
            name='year',
            field=adminsortable.fields.SortableForeignKey(default=2023, on_delete=django.db.models.deletion.CASCADE, to='diwalibackend.year'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='galleryimage',
            name='year',
            field=adminsortable.fields.SortableForeignKey(default=2023, on_delete=django.db.models.deletion.CASCADE, to='diwalibackend.year'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='gallerylink',
            name='year',
            field=adminsortable.fields.SortableForeignKey(default=2023, on_delete=django.db.models.deletion.CASCADE, to='diwalibackend.year'),
            preserve_default=False,
        ),
    ]
