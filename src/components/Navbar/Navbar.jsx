import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMouse = () => {
    setHover(!hover);
  };
  return (
    //   <ul className="navbar">

    //   </ul>
    <div className="top_navbar">
      <div className="navbar">
        <li className="top_rank" onClick={handleMouse}>
          Rank
          {hover && (
            <ul className="rank">
              <li>Day</li>
              <li>Week</li>
              <li>Month</li>
              <li>Year</li>
            </ul>
          )}
        </li>
        <li>
          {" "}
          <a href="/upload">All Music</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Spring</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Summer</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Autumn</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Winter</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Author</a>
        </li>
        <li>
          {" "}
          <a href="/upload">Category</a>
        </li>
        <li
          className="all"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/dots-loading--v2.png"
            alt=""
          />
          {open && (
            <ul className="all_list">
              <li>Favorite</li>
              <li>Most View</li>
              <li>Random</li>
            </ul>
          )}
        </li>
        <li>
          <a href="/upload">Upload</a>
        </li>
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Navbar;
