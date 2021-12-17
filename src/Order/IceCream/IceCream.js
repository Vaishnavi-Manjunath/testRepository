// import breakfast from './Images/breakfast.jpg'; 
import almondIceCream from './almondIceCream.jpg'; 
import gourmetIcecream from './gourmetIcecream.jpg'; 
import IcecreamSandwitch from './IcecreamSandwitch.jpeg';
// import './FoodItems.css'; 
import React, { useState } from 'react';
// import '../../Order/Order.css'



function IceCream() {
    // const [isAboutShown, setAboutShow] = useState(false);
  return (
    <div className="Order">

        <div class="card orderList" >
  <img className="iceImage" src={almondIceCream} alt="Denim Jeans" />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
  <br/>
  <hr/>
  <img className="iceImage" src={gourmetIcecream} alt="Denim Jeans" />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
  <hr/>
  <img className="iceImage" src={IcecreamSandwitch} alt="Denim Jeans" />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
  </div>
</div>

        
);
}
export default IceCream;
