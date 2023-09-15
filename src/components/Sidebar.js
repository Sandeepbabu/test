import React from 'react';
import "../App.css";
import { SidebarData } from './SidebarData';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                        className={`row ${window.location.pathname === val.link ? "active" : ""}`}
                        key={key} 
                        onClick={() => { window.location.pathname = val.link }}>
                          
                            <div id="icon"> {val.icon} </div>
                            <div id="title"> {val.title} </div>

                        </li>
                    )


                })}

            </ul>


        </div>
    )
}

export default Sidebar