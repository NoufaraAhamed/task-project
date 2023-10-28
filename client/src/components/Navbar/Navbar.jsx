import React from "react";
import "./Navbar.css";
import icon_menu from "../Assets/icons-menu.png";
import icon_user from "../Assets/icons-user.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={icon_menu} alt="" />
      </div>
      <div className="navbar-right">
        <div className="dropdowns">
          <div class="dropdown">
            <label htmlFor="">company</label>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Am Entertainment
            </button>
          </div>
          <div class="dropdown">
          <label htmlFor="">Branch</label>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INSTORE BRANCH
            </button>
          </div>
          <div class="dropdown">
          <label htmlFor="">language</label>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
          </div>
        </div>
        <div className="user">
          <img src={icon_user} alt="" />
          <p>1231231233</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
