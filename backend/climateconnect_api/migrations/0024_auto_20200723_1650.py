# Generated by Django 2.2.13 on 2020-07-23 16:50

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('climateconnect_api', '0023_userprofile_pending_new_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='password_reset_key',
            field=models.UUIDField(blank=True, help_text='key for resetting your password', null=True, unique=True, verbose_name='Password reset key'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='password_reset_timeout',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, help_text='Time when the password reset times out', verbose_name='Password reset timeout'),
            preserve_default=False,
        ),
    ]
