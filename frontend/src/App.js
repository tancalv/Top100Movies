import React from 'react';
import axios from "axios";
import 'animate.css';
import './App.css';
import iphoneBG from './iphoneBG.png'
import starryNight from './starryNight.jpg'
import MovieList from "./MovieList"
import Userlist from './Userlist'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend' 
 
class App extends React.Component {
constructor(props){
super(props);
  this.state = {
    movies: [],
    dropped: null,
    cbMovies: [],
	className: '',
	className2: '',
	className3: 'animate__animated animate__fadeIn',
	className4: 'animate__animated animate__fadeIn',
	clicked: false,
	 
  }
	this.cb = this.cb.bind(this);
	this.delete = this.delete.bind(this);
 
	this.pulse = this.pulse.bind(this);
	this.unpulse = this.unpulse.bind(this);
	this.pulse2 = this.pulse2.bind(this);
	this.unpulse2 = this.unpulse2.bind(this);
	this.movieAppClicked = this.movieAppClicked.bind(this);
	this.loginClicked = this.loginClicked.bind(this);
 }

  componentDidMount() {
    axios.get('/api/Top100Movies')
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }
 cb(movie){
	 
	this.setState({dropped: true});
  
 	
	if (this.state.cbMovies.length !== 0){ 
		var flag = 0;                                                                                                                                                      
		for (let i = 0; i < this.state.cbMovies.length; i++){
			if (this.state.cbMovies[i].title === movie.title){
				flag = 1;
				alert("Already added!");
			 
				break;
			}
		}
		if (!flag){
			this.setState({cbMovies: this.state.cbMovies.concat([movie])});
			}
		
	} else {	
		this.setState({cbMovies: this.state.cbMovies.concat([movie])}); 
 	}
	 
}
 delete(movie){
	var newList = [];
	if (this.state.cbMovies.length > 0){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
		for (let i = 0; i < this.state.cbMovies.length; i++){
			if (this.state.cbMovies[i].title !== movie.title){
				console.log(this.state.cbMovies[i].title);
				console.log(movie.title);
				newList = newList.concat(this.state.cbMovies[i]);
				console.log(newList);
		 
			}
		}
		this.setState({cbMovies: newList});
	} else {this.setState({cbMovies: newList});}

}
highlight(e){
	e.target.style.backgroundColor='grey';
	e.target.style.opacity=0.3;
}
unhighlight(e){
	e.target.style.backgroundColor='white';
	e.target.style.opacity=0;
}
pulse(e){
	e.target.style.cursor = 'pointer';
	e.target.style.opacity  = 0.1;
	this.setState({className3: 'animate__animated animate__pulse animate__infinite	infinite'});
	var loginBG = document.getElementById('loginBG');
	var login = document.getElementById('login');
	var hello = document.getElementById('hello');
	var movieApp = document.getElementById('movieApp');
	hello.style.display = 'none';
	
	setTimeout(()=>{movieApp.style.display = 'none';}, 1000);
	setTimeout(()=>{loginBG.classList.add('animate__animated', 'animate__fadeIn'); 	loginBG.style.display ='block';},1000);
	setTimeout(()=>{login.classList.add('animate__animated', 'animate__fadeIn'); 	login.style.display ='block';},1500);
}

unpulse(e){
	if (!this.state.clicked){
	e.target.style.opacity  = 1;
	this.setState({className3:''});
	var loginBG = document.getElementById('loginBG');
	var hello = document.getElementById('hello');
	var movieApp = document.getElementById('movieApp');
	hello.style.display = 'block';
	movieApp.style.display = 'block';
 
	setTimeout(()=>{loginBG.style.display ='none'; movieApp.style.display = 'block';},1000);
}	
}

pulse2(e){
	e.target.style.cursor = 'pointer';
	e.target.style.opacity  = 0.1;
	this.setState({className4: 'animate__animated animate__pulse animate__infinite	infinite'});
	var bgiphoneApp = document.getElementById('bgiphoneApp');
	var hello = document.getElementById('hello');
	var loginApp = document.getElementById('loginApp');
	var bgApp = document.getElementById('bgApp');
	var imdbButton = document.getElementById('imdbButton');
	var imdbButtonBG = document.getElementById('imdbButtonBG');
	var bg_title = document.getElementById('bg_title');
	var movie_title = document.getElementById('movie_title');
 
	imdbButton.classList.add('animate__animated', 'animate__bounceIn');
	imdbButtonBG.classList.add('animate__animated', 'animate__bounceIn');

	bgiphoneApp.style.zIndex = -4;
	hello.style.display = 'none';
	loginApp.style.display = 'none';
	this.setState({className2: 'animate__animated animate__wobble'})
	setTimeout(()=>{bgiphoneApp.style.display = 'block';}, 200);
	setTimeout(()=>{bgiphoneApp.style.filter = 'blur(8px)'}, 1000);
	setTimeout(()=>{bgApp.style.display = 'block'; 
	 imdbButton.style.display = 'block'; imdbButton.classList.remove('animate__animated', 'animate__bounceIn');
	  imdbButtonBG.style.display = 'block'; imdbButtonBG.classList.remove('animate__animated', 'animate__bounceIn');
	}, 1500);
	setTimeout(()=>{bg_title.style.display = 'block'; movie_title.style.display = 'block'; bgApp.style.opacity = 0.5;},2000);

}
unpulse2(e){
	if (!this.state.clicked){
	var bgiphoneApp = document.getElementById('bgiphoneApp');
	var hello = document.getElementById('hello');
	var loginApp = document.getElementById('loginApp');
	var bgApp = document.getElementById('bgApp');
	var imdbButton = document.getElementById('imdbButton');
	var imdbButtonBG = document.getElementById('imdbButtonBG');
	var bg_title = document.getElementById('bg_title');
	var movie_title = document.getElementById('movie_title');
	hello.style.display = 'block';
	loginApp.style.display = 'block';
	this.setState({className2: 'animate__animated animate__bounceOutUp'})
	imdbButton.classList.add('animate__animated', 'animate__bounceOutDown');
	imdbButtonBG.classList.add('animate__animated', 'animate__bounceOutLeft');
	bgApp.classList.add('animate__animated', 'animate__bounceOutRight');
	setTimeout(()=>{bgiphoneApp.style.display = 'none'; bgApp.style.display = 'none'; imdbButton.style.display = 'none'; imdbButton.classList.remove('animate__animated', 'animate__bounceOutDown');
	 imdbButtonBG.style.setProperty("display", "none", "important"); imdbButtonBG.classList.remove('animate__animated', 'animate__bounceOutLeft');
	
	}, 1500);
	setTimeout(()=>{bg_title.style.display = 'none'; movie_title.style.display = 'none'; bgApp.classList.remove('animate__animated', 'animate__bounceOutRight');},2000);
	 
	 }
	e.target.style.opacity  = 1;
	this.setState({className4:''});
}
movieAppClicked(e){
	this.setState({clicked: true});
	var button_app2 = document.getElementById('button_app2');
	e.target.style.display = 'none';
	setTimeout(()=>{button_app2.style.display='block'},3000);
	setTimeout(()=>{this.setState({clicked: false})},3000);
}
loginClicked(e){
	this.setState({clicked: true});
	e.target.style.display = 'none';
	setTimeout(()=>{this.setState({clicked: false})},3000);

}
render() {


return (
<>
{/*Fourth Page*/}
<div id="login" style={{display:'none', position:'absolute', width:'1200px', height:'600px', left:'25.5%', top:'20%', zIndex:3, background: 'rgba(223, 132, 246, 0.3)', border:'solid',  borderRadius: '1%'}}>
	<form>
	 
				<button className='d-flex' style={{position:'absolute', paddingLeft: '0px', left:'10%', top:'21.5%', backgroundColor: 'white', width:'400px', height:'35px'}}>
					<img className='p-2 align-self-center mr-5' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='uhoh' height='35px' width='35px'/>
					<span className='p-2  align-self-center mt-3'>Log in with Google</span> 
				</button>
			 
		 
				<button className='d-flex' style={{position:'absolute', paddingLeft: '0px', left:'10%', top:'28%', backgroundColor: 'white', width:'400px', height:'35px'}}>
					<img className='p-2 align-self-center mr-5' src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg 'alt='uhoh' height='35px' width='35px'/>
					<span className='p-2 align-self-center mt-3'style={{display:'inline-block'}}>Log in with Apple</span> 
				</button>
				 
			 
				<hr className="ml-5 mt-5 mr-4" style={{color: 'white', position:'absolute',left:'6%', top:'28.0%', width:'180px', display:'inline-block'}}/>
				<span  style={{color: 'white', position:'absolute' , left:'21%', top:'31.0%'}}>or</span> <hr className="ml-1"style={{color: 'white',position:'absolute',left:'28%', top:'33.5%',width:'180px', display:'inline-block'}}/> 

				<input type="email" style={{position:'absolute',left:'10%', top:'39%', width:'400px'}}placeholder="Email"/>
				<input type="password" style={{position:'absolute',left:'10%', top:'45%', width:'400px'}}placeholder="Password"/>
				<input type="checkbox" style={{position:'absolute',left:'10%', top:'52%'}} checked/> 
				<p style={{color: 'white', position:'absolute',left:'11.25%', top:'51%'}}>Remember me</p>
				<p style={{color: 'white', textDecoration:'underline', position:'absolute',left:'33%', top:'51%'}}>Forgot password?</p>
				<button style={{border: 'none', backgroundColor:'#037fe3', color:'white', position:'absolute',left:'10%', top:'57%', width:'400px'}}>Log in</button>
				<div className="d-flex" style={{height: '240px', position:'absolute',left:'51.25%', top:'21%'}}> <div className='vr'></div></div>
				<p style={{color: 'white', position:'absolute',left:'56.25%', top:'15.5%'}}>Sign up for free</p>
				<input type="text"style={{position:'absolute',left:'56.25%', top:'21.5%', width:'400px'}}   placeholder="First name"/>
				<input type="text"style={{position:'absolute',left:'56.25%', top:'28%', width:'400px'}}   placeholder="Last name"/>
				<input type="email"style={{position:'absolute',left:'56.25%', top:'35%', width:'400px'}}   placeholder="Email"/>
				<input type="password"style={{position:'absolute',left:'56.25%', top:'42%', width:'400px'}}   placeholder="Password"/>
				<input type="checkbox" style={{position:'absolute',left:'56.25%', top:'49%'}}/>
				<p style={{color: 'white', position:'absolute',left:'57.75%', top:'47.75%'}}> I agree to the <a style={{color: 'blue', textDecoration:'underline', cursor:'pointer'}}>Apps Terms.</a></p>
				<button style={{border: 'none', backgroundColor:'#037fe3', color:'white', position:'absolute',left:'56.25%', top:'57%', width:'400px'}}>Sign up</button>
				<hr className="ml-5 mt-5 mr-4" style={{color: 'white', position:'absolute',left:'52.25%', top:'60.0%', width:'180px', display:'inline-block'}}/>
					<span  style={{color: 'white', position:'absolute' , left:'67%', top:'62.75%'}}>or</span> 
				<hr className="ml-1"style={{color: 'white', position:'absolute',left:'73.50%', top:'65.50%',width:'180px', display:'inline-block'}}/> 
				<button className='d-flex' style={{position:'absolute', paddingLeft: '0px', left:'56.25%', top:'75.5%', backgroundColor: 'white', width:'400px', height:'35px'}}>
					<img className='p-2 align-self-center mr-5' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='uhoh' height='35px' width='35px'/>
					<span className='p-2  align-self-center mt-3'>Sign up with Google</span> 
				</button>
	</form>
</div>

{/*Third Page*/}
<div id="hello" className='animate__animated animate__backInLeft' style={{display:'none',
	 position:'absolute',  left:'47.5%', top:'16%', fontSize:'25pt', width:'60px', height:'60px'}}>Hello</div>
<div id="loginApp" className={this.state.className3}
	onMouseOver={this.pulse}
	onMouseLeave={this.unpulse}
	onClick={this.loginClicked}
	style={{backgroundColor: 'black', display:'none',
	 position:'absolute',  left:'32.5%', top:'30%', fontSize:'25pt', width:'260px', height:'260px', borderRadius:'10%',
	  zIndex: 5}}>login page</div>

<div id="movieApp" className={this.state.className4} 
	onMouseOver={this.pulse2}
	onMouseLeave={this.unpulse2}
	onClick={this.movieAppClicked}
	style={{backgroundColor: 'black', display:'none',
	 position:'absolute',  left:'53%', top:'30%', fontSize:'25pt', width:'260px', height:'260px', borderRadius:'10%', zIndex: 10
	 }}>Movie App</div>

<img id='loginBG' src={starryNight} alt='uhoh' height='100%' width='100%' style={{display: 'none'}}/>


{/*Second Page*/}
<>
<button id='button_app2' onMouseOver={this.highlight} onMouseLeave={this.unhighlight}
onClick={(e)=>{
	var bg_title = document.getElementById('bg_title');
	var movie_title = document.getElementById('movie_title');
	var bgApp = document.getElementById('bgApp');
	var imdbButton = document.getElementById('imdbButton');
	var imdbButtonBG = document.getElementById('imdbButtonBG');
	var bgiphoneApp = document.getElementById('bgiphoneApp');
	var loginApp = document.getElementById('loginApp');
	var hello = document.getElementById('hello');
	var movieApp = document.getElementById('movieApp');
	bg_title.style.display = 'none';
	movie_title.style.display = 'none';
	bgApp.style.display = 'none';
	imdbButton.style.display = 'none';
	bgiphoneApp.style.filter = 'blur(0px)';
	e.target.style.display = 'none';
	setTimeout(()=>{this.setState({className2: 'animate__animated animate__backOutRight'});}, 500);
	setTimeout(()=>{bgiphoneApp.style.display = 'none'}, 900);
	setTimeout(()=>{hello.style.display='block'},300);
 
	setTimeout(()=>{loginApp.style.display='block'},4000);
	setTimeout(()=>{movieApp.style.display='block'},5000);
	imdbButtonBG.style.setProperty("display", "none", "important");
}}
 
style={{display: 'none', height:'200px', width:'100%', position:'absolute',  right: '0%', bottom:'0%', backgroundColor: 'white', borderStyle:'hidden', zIndex: '2', opacity: 0}} > </button>
<p id="bg_title" className="animate__animated animate__fadeIn"style={{display:'none', position:'absolute', color: 'white', left:'47.5%', top:'16%', zIndex:2, fontSize:'25pt'}}>App</p>
<p id="movie_title" className="animate__animated animate__fadeIn" style={{display:'none', position:'absolute', color: 'white', left:'48%', top:'47%', zIndex:2, fontSize:'15pt'}}>Top100</p>
<img id="bgiphoneApp" className={this.state.className2} src={iphoneBG} alt="uhoh" height="1000px" width="750px"style={{position:'absolute', display:'none', bottom:'0%', left: '34.5%', filter: 'blur(8px)', backgroundColor: 'white'}}></img>
<div id="bgApp" style={{display: 'none', borderRadius:'10%', position: 'absolute', left:'40.5%', top: '24%', height:'350px', width:'350px', backgroundColor: 'rgb(220,220,220)', opacity: 0.5}}></div>
<div id="imdbButtonBG" className='d-flex justify-content-center' style={{borderRadius:'10%', position: 'absolute', left:'47%', top: '38%', height:'90px', width:'100px', backgroundColor: 'black', opacity: 1}}> 
<img id="imdbButton" onClick={()=>{
	var movie_app = document.getElementById('MyTop100Movies');
	var bg_title = document.getElementById('bg_title');
	var movie_title = document.getElementById('movie_title');
	var bg_iphoneApp = document.getElementById('bgiphoneApp');
	var button_app = document.getElementById('button_app');
	movie_title.style.display = 'none';
	bg_title.style.display = 'none';
	bg_iphoneApp.style.display = 'none';
	button_app.style.display = 'block';
	movie_app.style.display = 'block';
	this.setState({className: 'animate__animated animate__zoomIn'});
 }} 
	 onMouseOver={(e)=>{e.target.style.cursor = 'pointer';}
	}
	src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="uhoh" height="80px" width="80px" style={{position: 'absolute'}}/>
</div>
</>
{/*First Page*/}
<button id='button_app' onMouseOver={this.highlight} onMouseLeave={this.unhighlight}
		onClick={()=>{
		var bg_title = document.getElementById('bg_title');
		var movie_title = document.getElementById('movie_title');
		var button_app = document.getElementById('button_app');
		var movie_app = document.getElementById('MyTop100Movies');
		var bg_app = document.getElementById('bgApp');
		var bg_iphoneApp = document.getElementById('bgiphoneApp');
		var button_app2 = document.getElementById('button_app2');
		setTimeout(()=>{movie_title.style.display='block'},2000);
		setTimeout(()=>{bg_title.style.display='block'},5000);
		setTimeout(()=>{bg_app.style.display='block'},2000);
		setTimeout(()=>{bg_iphoneApp.style.display='block'},5000);
		setTimeout(()=>{this.setState({className2: 'animate__animated animate__fadeIn'})}, 2000);
		setTimeout(()=>{button_app2.style.display='block'},5000);
		
		button_app.style.display = 'none';
		setTimeout(() => { 
		movie_app.style.display = 'none';
		},3000);
	 
		this.setState({className: 'animate__animated animate__zoomOut'});

		}}
	 style={{ height:'150px', width:'100%', position:'absolute',  right: '0%', bottom:'0%', backgroundColor: 'white', opacity: 0.3, borderStyle:'hidden', zIndex: '3'}} > </button>
	
	<div id="MyTop100Movies" className={this.state.className} style={{position: 'relative'}}> 
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{marginBottom:'50px'}}>
		 
				
					<a className="navbar-brand" href='#'>
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="uhoh" height="80px" width="80px"/>
					</a>
			  
					<form className='form-inline ml-auto'>
						<input type='email' className='form-control form-control-lg mr-2 ' placeholder='Email'/>
						<input type='password' className='form-control form-control-lg mr-2' placeholder='Password'/>
						<button type='submit' className='btn btn-primary btn-lg mr-2'>Login</button>
						<button type='button' className='btn btn-primary btn-lg mr-2'>Register</button>
					</form>	
				 
			 
		</nav>
 		<div className="d-flex justify-content-center">
			<div className="d-flex justify-content-center" style={{backgroundColor: 'black', padding: '10px', position: 'relative', width: this.state.cbMovies.length === 0 ? '570px':'850px', borderRadius: '5%'}}><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="uhoh" height="100px" width="100px" style={{position: 'absolute', zIndex:2, left:'0%', top: '-10%'}}/>
	  			<div> 
	  				<DndProvider backend={HTML5Backend}>
	     				<MovieList dropped={null} data={this.state} cb={this.cb} delete={this.delete} showButton={false} color={"black"} height="150px" width="150px"/>
	    				{ this.state.dropped === null && this.state.cbMovies.length === 0 ? <Userlist showButton={false} dropped={this.state.dropped} data={this.state} cb={this.cb} delete={this.delete} height="150px" width="150px"/> : <Userlist showButton={true} dropped={true} data={this.state} cb={this.cb} delete={this.delete} height="150px" width="150px"/>}
     				</DndProvider>
	 			</div>
	 		</div>
	 	</div>
	</div>
 
</>
      
    );
  }
}
 

export default App;
