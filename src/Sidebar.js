import React from 'react';
import "./Sidebar.css";
import {SideBarData} from "./SideBarData";


function Sidebar() {
     return (
         <div className="Sidebar">
             <ul className="SidebarList">
                 {SideBarData.map((val,key)=>{
                     return (
                         <li className="SidebarRow"  key={key}  onClick={()=> {window.location.pathname=val.link} } 
                         >
                             
                             <div id="RowIcon">{val.icon}</div>
                             <div id="RowTitle">
                                 {val.title}
                             </div>
                         </li>);
                 })}
             </ul>
         </div>
     );  
}
 
export default Sidebar;