import breakfast from './Images/breakfast.jpg'; 
import burger from './Images/burger.jpg'; 
import sundae from './Images/sundae.jpg'; 
import donut from './Images/donut.jpg';
import './FoodItems.css'; 
import React, { useState } from 'react';
import Order from '../Order/Order';




function FoodItems(props) {
  return (
    <div className="FoodItems">
        <div class="card" >
            <img className="food" src={sundae} alt="Avatar" />
            <div class="container">
                <h4><b>Sundae</b></h4> 
            </div>
        </div> 
        <div class="card">
            <img className="food" src={burger} alt="Avatar" />
            <div class="container">
                <h4><b>Burger</b></h4> 
            </div>
        </div> 
        <div class="card">
            <img className="food" src={donut} alt="Avatar" />
            <div class="container">
                <h4><b>Donut</b></h4> 
            </div>
        </div> 
        <div class="card">
            <img className="food" src={breakfast} alt="Avatar" />
            <div class="container">
                <h4><b>Break Fast</b></h4> 
        </div>
    </div>  
    </div>
        
);
}
export default FoodItems;
