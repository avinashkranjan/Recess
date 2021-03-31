import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { SideBarData } from "./SideBarData";

function Sidebar() {
  const history = useHistory();
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SideBarData.map((val, key) => {
          return (
            <li
              className="SidebarRow"
              key={key}
              onClick={() => {
                history.push(val.link);
              }}
            >
              <div id="RowIcon">{val.icon}</div>
              <div id="RowTitle">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
