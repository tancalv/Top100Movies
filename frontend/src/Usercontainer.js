import React from 'react';
import Box from '@material-ui/core/Box';
import {ItemTypes} from './Constants';
import {useDrop} from 'react-dnd';
import uploadImage from './uploadImage.png' 

function Usercontainer(props){
	const [{isOver }, drop] = useDrop(
  () => ({
    accept: ItemTypes.MOVIE,
    
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
   
    })
  }), 
  
)
	
	return(
		<div className="d-flex flex-row " style={{padding:'10px', backgroundColor:'lightblue', borderRadius:'10px'}}>
			<br></br>
		<div style={{border: isOver? 'rgba(42,63,81,255) dashed' : 'lightgrey dashed', height:'420px', width:'100%', textAlign:'center', backgroundColor: 'white', borderRadius:'10px'}} className="p-2">
			<div ref={drop} style={{paddingTop:'60px'}}>
				<br/><br/><br/>
					<Box style={{backgroundColor: isOver ? 'white' : 'white'}} bgcolor="white" height="220px" width="500px">
					<img src={uploadImage} alt="uhoh" style={{height:'50px', width:'50px'}}/>
					<p style={{color: isOver? 'rgba(42,63,81,255)' : 'lightgrey', fontSize: '30pt' }}>Drop a movie here.</p>
					 
					</Box>
			 </div>
			 
			  
		</div>
		{props.data.cbMovies.length !== 0 && <div className="p-2" style={{height:'420px', width:'100%', backgroundColor: props.dropped === null ? 'white': 'rgb(245,245,245)', marginLeft:'10px', borderRadius: '10px'}}>
			{props.data.cbMovies.length !== 0 && <div style={{fontWeight:'bold', marginBottom:'10px'}}>My Movies</div>}
		 {props.children}
		 </div>}
		 </div>
	);
}

export default Usercontainer;