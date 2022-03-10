import json
from .models import Movie
from pathlib import Path
  
def get_request():
    moviesList = []
    p = Path(__file__).with_name('pomj.txt')
    with p.open('r') as f:
        json_data = json.loads(f.read())
 
    for movies in json_data['items']:
        movie_obj = Movie(title=movies['title'],thumbnail=get_image(movies['image']),year=movies['year'],rating=movies['imDbRating'])
        moviesList.append(movie_obj)
    return moviesList
        
def get_image(movieImage):
    return movieImage[:movieImage.find("_V1_")+4]+"Ratio0.6791_AL_.jpg"
    