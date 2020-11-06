# Generated by Django 2.2.13 on 2020-11-02 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('climateconnect_api', '0034_auto_20201029_2217'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='email_on_new_project_follower',
            field=models.BooleanField(blank=True, default=True, help_text='Check if user wants to receive emails when somebody follows their project', null=True, verbose_name='Email on new project follower'),
        ),
    ]