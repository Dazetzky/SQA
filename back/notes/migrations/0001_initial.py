# Generated by Django 5.1.3 on 2024-11-19 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('username', models.CharField(max_length=24)),
                ('userid', models.IntegerField()),
            ],
        ),
    ]
