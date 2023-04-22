import React from "react";
import '../App.css'
const SubMenu = ({ route }) => {
  return (
    <div className="sMenu">
      <div className="menuButton">{route.name}</div>
      <div className="subRouteContainer">
        {
            route.subroute.map((subroute)=>(
                <div key={subroute.name} className="subRoute">{subroute.name}</div>
            ))
        }
      </div>
    </div>
  );
};

export default SubMenu;
