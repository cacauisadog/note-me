# Generated by Django 2.1.3 on 2018-11-02 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('noteme', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='created_at',
            field=models.DateTimeField(editable=False, null=True),
        ),
    ]