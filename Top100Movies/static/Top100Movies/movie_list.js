import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const css = `
	#imdbContainer{
	overflow:auto;
	border-style: outset;
	width: 500px;
	border-radius: 10px;
	background-color:black;
}

`
 
class MovieList extends React.Component {
	
  state = {
    movies: []
  }

 

  componentDidMount() {
    axios.get('/api/Top100Movies')
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <DragDropContext>
       	<div class="d-inline-flex p-2" id="imdbContainer"><style>{css}</style>
          {this.state.movies
            .map(movie =>
              <div key={movie.id}> <img src={movie.thumbnail} alt="uh oh" height="150px" width="150px"/></div>
            )}
          </div>
       </DragDropContext>
     
    );
  }
}

 
 
const rootElement = document.getElementById("root");
ReactDOM.render(<MovieList />, rootElement);