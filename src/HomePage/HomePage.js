import './HomePage.css'
import { useState } from 'react';
import Carousels from '../Carousel/Carousel';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
import IceCream from '../Order/IceCream/IceCream';
import Header from '../Header/Header';



function HomePage() {

const [goto, setGoto] = useState("FoodItems")

  return (
    <div className="HomePage">
        <Header/>
        <div>
            <Carousels/>
        </div>
        <div>
        {goto=="FoodItems" && <FoodItems/>}
        <div><button onClick={() => setGoto("Order")}>Click for Burger</button></div>
{/* HOW TO SET THIS BUTTON IN CARD */}
        </div> 
        <div><button onClick={() => setGoto("Breakfast")}>Click for Breakfast</button></div>
        <div><button onClick={() => setGoto("Donut")}>Click for Donut</button></div>

        <div>
        {goto =="Order"  && <IceCream/>} 
        </div>
        <div><button onClick={() => setGoto("Sundae")}>Click Sundae</button></div>
     
        <div>
        <Footer/>
        </div>       
    </div>
  );
}

export default HomePage;
