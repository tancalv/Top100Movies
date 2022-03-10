import React from 'react';
import Box from '@material-ui/core/Box';
 

function Usermovielist({children}){
 
	return(
      
       
		<div className="overflow-auto"style={{height:"350px", width:"100%"}}>
			<div  style={{height:"100%", width:"100%"}}>
			 
					<Box   bgcolor="grey" height="400px" width="250px">
						{children}
					</Box>
			 </div>
		   
		</div>
      
	);
}

export default Usermovielist;