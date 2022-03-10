import React from 'react';
 
 

 
function MovieContainer({children}, props){
 	 
    return (
	 	<div className="d-flex align-items-start justify-content-start"
	 		style={{
		backgroundColor: props.color,
		width: "100%",
		height: "100%",
	 
	}}>
     	{children} 
     	</div>
    )
  }

 

export default MovieContainer;
