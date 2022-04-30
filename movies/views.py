from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import permissions
from .models import Movie
from .serializers import MovieSerializer

class MovieListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = None

class MovieView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MoviePostView(ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDeleteView(DestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieUpdateView(UpdateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
