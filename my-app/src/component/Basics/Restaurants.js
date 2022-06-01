import "./style.css";
import Menu from "./menuApi.js";
import { useState } from 'react';
import MenuCard from "./MenuCard";



const Restaurants = () => {

  // To manage data
  const [menuData, setMenuData] = useState(Menu);

   const filtrtItem = (category) => {
   const updatedList = Menu.filter((curElem) =>{
     return curElem.category === category;
   });
    setMenuData(updatedList);
   };
  return ( 
  <>

   <nav className="navbar">
     <div className="btn-group"> 
         <button className="btn-group__item" onClick={() =>filtrtItem("breakfast")}> Breakfast</button>
         <button className="btn-group__item" onClick={() =>filtrtItem("lunch")}> lunch</button>
         <button className="btn-group__item" onClick={() =>filtrtItem("evening")}> Evening</button>
         <button className="btn-group__item" onClick={() =>filtrtItem("dinner")}> Dinner</button>
         <button className="btn-group__item" onClick={() =>setMenuData(Menu)}> All</button>
     </div>

   </nav>
  <MenuCard menuData={menuData} />
  </>
  );
} 

export default Restaurants;