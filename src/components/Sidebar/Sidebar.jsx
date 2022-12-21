import logo from "../../img/logo.png";
import "./Sidebar.css";
import { sidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useState } from "react";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>Hashtag</span>
      </div>

      <div className="menu">
        {sidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className={selected === index ? "active menu-item" : "menu-item"}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menu-item">
          <UilSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
