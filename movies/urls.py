from .models import Movie
from django.urls import path
from .views import MovieListView, MovieView, MoviePostView, MovieDeleteView, MovieUpdateView

urlpatterns = [
    path('', MovieListView.as_view()),
    path('<pk>', MovieView.as_view()),
    path('upload/', MoviePostView.as_view()),
    path('delete/<pk>', MovieDeleteView.as_view()),
    path('update/<pk>', MovieUpdateView.as_view()),
]