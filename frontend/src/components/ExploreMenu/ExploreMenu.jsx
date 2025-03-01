import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Explore our diverse menu and savor a world of flavors crafted just for
        you!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return <div key={index} className="explore-menu-list-item">
            <img src={item.menu_image} alt="" />
            <h2>{item.menu_name}</h2>
           
          </div>;
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
