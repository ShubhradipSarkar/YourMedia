# Generated by Django 4.2.3 on 2023-07-23 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0002_posts'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='post_id',
        ),
    ]
