import "./style.css";
import Menu from "./menuApi.js";
import { useState } from 'react';
import MenuCard from "./MenuCard";



const Restaurants = () => {

  // To manage data
  const [menuData, setMenuData] = useState(Menu);
  return <>
  <MenuCard menuData={menuData} />
  </>;
} 

export default Restaurants;