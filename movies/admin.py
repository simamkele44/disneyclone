from django.contrib import admin
from .models import Movie

class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'subtitle')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25

admin.site.register(Movie, MovieAdmin)

