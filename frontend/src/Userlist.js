import React  from 'react';
import Usercontainer from './Usercontainer';
import MovieList from './MovieList'
import Usermovielist from './Usermovielist';
function Userlist(props) {
  
 
	
	return (
		 
	 
		<div>{props.dropped === null || props.data.cbMovies.length === 0?
	 
			 <Usercontainer data={props.data}>
			 	 
			 </Usercontainer> 
			 : 
			 <Usercontainer data={props.data}>
				 <Usermovielist> 
			 		<MovieList dropped={props.dropped} data={props.data} cb={props.cb} delete={props.delete} height="150px" width="150px" showButton={props.showButton}/>
				 </Usermovielist>
			</Usercontainer>}
      </div>    
 
      );
}
	
export default Userlist 