# Generated by Django 3.2.16 on 2024-08-21 23:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_auto_20240821_0151'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='imageUrl',
        ),
    ]
