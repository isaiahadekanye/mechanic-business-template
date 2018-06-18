import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter 
    } from "react-router-dom";
    import Home from "./Home";
    import About from "./About";
    import Services from "./Services";

class Main extends Component {
	render(){
		return (
		<HashRouter>
		<div>
		  <div className ="navbar">
             <NavLink to ="/ Services">Services</NavLink>
             <NavLink to ="/ About">About Us</NavLink>
             <NavLink to ="/ ">Home</NavLink>
         </div>
         <div className = "content">
         <Route exact path= "/ Services" component= {Services} />
         <Route path= "/ About" component= {About} />
         <Route path= "/ " component= {Home} />
         </div>
         <div className ="footer" >
             <div className ="column">
                <p>Over 40 Years fixing cars</p>
                <br/>
               <p>More Company related information here</p>
           </div>
           <div className ="column" >
              <p>OUR SERVICES <br/>
              <br/>
              - Mechanics <br/>
              - Car Checks <br/>
              - Oil and Break Checks <br/>
              - Breakdown Services <br/>
              -Tire Change <br/>
             - Battery Change</p>
           </div>
          <div className ="column">
             <p>Visit Us At:
    	     <br/>
             Toronto <br/>
             Ontario, Canada. </p>
             <p>Phone Number:
             <br/>
     	     647-123-4567</p>
             <p>Email:
        	<br/>
     	   TheCarGuys
     	   @mail.com</p>
         </div>
     </div>
</div>
</HashRouter>
		);
	}
}

export default Main;