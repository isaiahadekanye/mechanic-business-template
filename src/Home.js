import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import image4 from './image4.png';
import image5 from './image5.jpg';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
];

const Slideshow = () => {
    return (
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
    )
}

class Home extends Component {
render() {
        return (
        <div>
        < Slideshow />
            <div className = "About">
            <h1> Come Visit Us < /h1> 
            <div className = "column1">
            <h2> Testimonials < /h2> 
            <div className = "containere" >
            < img src = {image4} alt = "Avatar"/>
            <p > < span > Drake < /span> CEO at OVO.</p >
            <p > Best people to fix your cars. < /p> </div>
            <div className = "containere" >
            <img src = {image5} alt = "Avatar" />
            <p > < span > Kanye West. < /span> CEO at West.</p >
            <p > Best people to fix your cars < /p> </div>
            </div> <div className = "column1">
            <h2 > Book Appointment < /h2> 
            <div className = "con">
            < form>
            <label for = "name" > Name < /label>
             <input type = "text" id = "name" name = "name" placeholder = "Your name.." />
            <label for = "mail" > E - mail: < /label> 
            < input type = "text" id = "mail" name = "mail" placeholder = "Your E-mail.." />
            <label for = "number" > Phone - Number: < /label> 
            <input type = "text" id = "number" name = "number" placeholder = "Your Phone number.." />
            <label for = "subject" > Car Issues < /label> 
            <textarea id = "subject" name = "subject" placeholder = "Write Car Issues here.."> < /textarea>
            < input type = "submit" value = "Submit" />
            <input type = "reset" value = "Reset" />
            </form> 
            </div> 
            </div>
             <div className = "column1">
            <h2 > Products < /h2> 
            < img src = "http://www.armorall.com/sites/default/files/Ultra-Shine-Wash-and-Wax-1.6.1.png" alt = "product"/>
            <br/>
            <img src = " http://www.roadmagazine.co.uk/wp-content/uploads/2012/02/Picture-1.png" alt = "product"/>
            <br/>
            <img src = " http://www.secondchancegarage.com/new-products/jul-14-products/ProlongWashShine&SuperProtectant.jpg" alt = "product"/>
            <br/>
            <img src = "http://www.carsdiamond.com/wp-content/uploads/2017/06/pinterest.jpg" alt = "product"/>
            <br/>
            < img src = "http://cdnimage.detailking.com/wp-content/uploads/2013/10/car_care_exterior_products-0x0.jpg" alt = "product"/>
            </div>

           </div>
            <div className = "current">
            <a href = "#"  className = "fa fa-facebook" > < /a> 
            <a href = "#" className = "fa fa-twitter" > < /a> 
            <a href = "#" className = "fa fa-google" > < /a> 
             < a href = "#" className = "fa fa-youtube" > < /a> 
             < a href = "#" className = "fa fa-instagram" > < /a> 
             < a href = "#" className = "fa fa-pinterest" > < /a> 
             < a href = "#" className = "fa fa-yahoo" > < /a>
             < a href = "#" className = "fa fa-reddit" > < /a>
            </div> 
       </div>
        );
    }
}

export default Home;