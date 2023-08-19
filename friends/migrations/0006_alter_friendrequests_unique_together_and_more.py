# Generated by Django 4.2.3 on 2023-08-19 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0005_rename_first_integer_friendrequests_request_from_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='friendrequests',
            unique_together={('request_from', 'request_to')},
        ),
        migrations.AddConstraint(
            model_name='friendrequests',
            constraint=models.CheckConstraint(check=models.Q(('request_from', models.F('request_to')), _negated=True), name='not_equal_values'),
        ),
    ]
