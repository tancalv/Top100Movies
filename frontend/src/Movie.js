import React  from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';
import './Movie.css'

 

function Movie(props) {
	const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.MOVIE,
    item: {props},
    end: (item, monitor) => {
		const dropResult = monitor.getDropResult()
		if (dropResult){
			alert(`You dropped ${item.props.data.title}!`)
	 		props.cb(props.data)
	   
		}
		else if (props.dropped) {
			props.delete(props.data)
		 
	 
		}
		
		},
	

    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  )
  function blurBackground(e){
	  e.target.style.filter = 'blur(8px)';
  }
  function unblurBackground(e){
	e.target.style.filter = 'blur(0px)';
}
function deleteMovie(e){
	props.delete(props.data)
}
 
	return (
		 	<div ref={drag} className="content_img" style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
		cursor: props.dropped === true ? 'pointer' : 'move',
      }} >
		  { props.dropped === null ?
		  <>
		  		<img src={props.data.thumbnail} alt="uh oh" height={props.height} width={props.width} style={{borderRadius: '10%'}} 
				  onMouseOver={blurBackground}
				  onMouseLeave={unblurBackground}/>
				<div id="dragMe">[+] Drag Me</div>  </>
		: <>  
			<img src={props.data.thumbnail} alt="uh oh" height={props.height} width={props.width} style={{position:'absolute', borderRadius: '10%', bottom: '7%', right:'76%'}} 
			 />
	  <span className="d-inline-block text-truncate"  >{props.data.title} </span>
		    <button onClick={deleteMovie}>X</button>  </>
		  }
	    </div>     
	);
	
}

export default Movie