# Generated by Django 3.2.16 on 2024-08-21 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(max_length=500, upload_to='upload/'),
        ),
    ]
