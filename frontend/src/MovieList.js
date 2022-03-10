import React, {useRef} from 'react';
import './MovieList.css';
 
import MovieContainer from './MovieContainer'
 
import Movie from './Movie'
 
function MovieList(props) {
	
	const ref1 = useRef(null);
	const scroll = (scrollOffset) => {
		ref1.current.scrollLeft += scrollOffset;
	  };
    return (
	
	<div id="buttonManager" >
	 <div ref={ref1} className="d-flex flex-row" style={{backgroundColor:props.color, overflowX:'scroll', overflowX:'hidden',	width: props.data.cbMovies.length === 0 ? '542px':'818px', borderRadius: '2%', scrollBehavior: 'smooth'}}>
	 {//Render Movie List from api
		props.dropped === null &&
		props.data.movies.map(movie => 
		
	 	<div className="p-2" key={movie.pk}>
			  
		      <MovieContainer height={props.height} width={props.width} color="black">
		      	<Movie dropped={props.dropped} data={movie} cb={props.cb} height={props.height} width={props.width}/>
		      </MovieContainer> 
		    
     	</div>
     	  )  }</div>

		   	 <div className="d-flex align-items-start flex-column flex-nowrap overflow-auto"  >

		{ props.dropped === true && 
     	  props.data.cbMovies.map(movie => 
 			  <div className="p-2" key={movie.pk} style={{width: '250px', backgroundColor: 'white', borderRadius:'10px', marginBottom:'5px'}}>
		      <MovieContainer height={props.height} width={props.width}>
		      	<Movie dropped={props.dropped} data={movie} cb={props.cb} delete={props.delete} height="50px" width="50px"/>
		      </MovieContainer> 
			</div>
      	
     	 )}
		  
      </div>
 
	  {props.data.cbMovies.length === 0 && props.dropped === null ? props.showButton ? <></>:<> 
	  <button id="leftButton" style={{bottom: '40%', right: '94.5%'}}onClick={() => scroll(-500)}>  &lt; </button>
	  <button id="rightButton" style={{bottom: '40%',  right: '-4.5%'}}onClick={() => scroll(500)}> &gt; </button> </> 
	  : props.showButton ? <></>:<> 
	  <button id="leftButton" style={{bottom: '40%', right: '97%'}}onClick={() => scroll(-500)}>  &lt; </button>
	  <button id="rightButton" style={{bottom: '40%',  right: '-3%'}}onClick={() => scroll(500)}> &gt; </button> </>

	  }
	   
	  </div>
    );
   
}
 

export default MovieList;
