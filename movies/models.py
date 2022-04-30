from django.db import models
from django.db.models.deletion import DO_NOTHING
from django.utils.timezone import now

class Movie(models.Model):
    title = models.CharField(max_length=300)
    description = models.CharField(max_length=450)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    subtitle = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)

    def __str__(self):
        return self.title


