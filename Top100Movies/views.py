from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template.context_processors import request
from .getDatabaseInfo import get_request
from .serializers import MovieSerializer
from rest_framework import viewsets
from .models import Movie
from rest_framework.viewsets import ModelViewSet
"""
def index(request):
    return render(request, "Top100Movies/index.html")

def add_movies(request):
    context = {}
  
    context['movies'] = get_request()
    
    return render(request, "Top100Movies/add_movies.html", context)
"""
class view_movies(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()