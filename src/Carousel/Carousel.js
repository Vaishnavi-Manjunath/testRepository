import cupcakes from './Images/cupcake7.jpg'; 
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


function Carousels() {
  return (
    <div className="HomePage">
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
            </ul>
  {/* // WHY IS CAROUSEL NOT CHANGING */}
        <div class="carousel-inner" >  
            <div class="carousel-item active">
                <img src={cupcakes} alt="Los Angeles" width="1100" height="500"/>
                <div class="carousel-caption">
                    <h1>50% off on First Item</h1>
                </div>   
            </div>
            <div class="carousel-item">
                <img src={cupcakes} alt="Chicago" width="1100" height="500"/>
                <div class="carousel-caption">
                    <h3 className="caption">50% off on Second Item</h3>
                </div>   
            </div>
        </div>
        </div>
    </div>
  );
}

export default Carousels;
