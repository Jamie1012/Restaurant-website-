import React  from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import { useState } from 'react';


const MenuCard = ( {menuData} ) => {
 
   console.log(menuData);
    return (
      <>
      <div className="card-container">
          <div className="card">
                <div className="card-body">
                      <span className="card-number card-circle subtle ">1</span>
                      <span className="card-author subtle" > Breakfast</span>
                      <h2 className="card-title"> Maggie</h2>
                      <span className="card-description subtle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate maxime, eveniet ullam quibusdam alias.
                      </span>
                      <div className="card-read">Read</div>
                </div>
                {/* <img src={image} alt="images" className="card-media" /> */}
            </div>
      </div>
    </>
    );
  };
   
  export default MenuCard;
   