# Generated by Django 3.2.16 on 2024-08-21 08:34

import apps.product.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20240821_0105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(max_length=500, upload_to=apps.product.models.product_image_directory),
        ),
    ]
