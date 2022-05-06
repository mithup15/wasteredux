import React from "react";
import { useSelector } from "react-redux";

function Header(){
    const usename=useSelector((state) => state.user.name);
    return(
        <div id="header">
            <h1>{usename}</h1>
        </div>
    );
}
export default Header;