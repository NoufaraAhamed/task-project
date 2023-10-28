import React from "react";
import "./Mainsection.css";
import print_icon from "../Assets/icons-print.png";
import export_icon from "../Assets/icons-upload.png";
import send_icon from "../Assets/icons-send.png";
import plus_icon from "../Assets/icons-plus.png";
import filter_icon from "../Assets/icons-filter.png";
import Table from "../Table/Table";

function Mainsection(props) {
  const { items } = props;
  return (
    <div className="mainsection">
      <div className="box">
        <div className="master">
          <div className="master-left">
            <div className="master-title">
              <h2>Item Master </h2>
              <div className="count">8</div>
            </div>
            <div className="para">
              <p>Keep track of your items</p>
            </div>
          </div>
          <div className="master-button">
            <button className="btn btn-primary">
              <img src={print_icon} alt="" /> Print{" "}
            </button>
            <button className="btn btn-primary">
              <img src={export_icon} alt="" /> Export{" "}
            </button>
            <button className="btn btn-primary">
              {" "}
              Send <img src={send_icon} alt="" />
            </button>
            <button className="btn btn-primary">
              {" "}
              Create <img src={plus_icon} alt="" />
            </button>
          </div>
        </div>
        <hr />

        <div className="sort">
          <div className="dropdowns">
            <div class="dropdown sort-dropdown">
              <label htmlFor=" " className="sortlabel">
                Search by
              </label>
              <button
                class="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
            </div>
            <div class="dropdown sort-dropdown">
              <label htmlFor="" className="sortlabel">
                Sort by
              </label>
              <button
                class="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
            </div>
            <div class="dropdown sort-dropdown">
              <label htmlFor="" className="sortlabel">
                sort order
              </label>
              <button
                class="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ascending
              </button>
            </div>
          </div>
          <div className="master-button">
            <button className="btn btn-primary">
              <img src={filter_icon} alt="" /> Show{" "}
            </button>
            <button className="btn btn-primary"> Clear </button>
          </div>
        </div>

        <Table items={items} />
      </div>
    </div>
  );
}

export default Mainsection;
