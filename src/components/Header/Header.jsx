import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img src="https://img.icons8.com/office/40/000000/musical.png" alt="" />
        <span>MUSIC</span>
      </div>
      <div className="zone_search">
        <img
          src="https://img.icons8.com/fluency/48/000000/search.png"
          alt=""
          className="icon_search"
        />
        <input
          className="search"
          placeholder="enter name, post ... need to find"
        ></input>
      </div>
      <div className="sign">
        <span>
          <a href="/">Sign in</a> / <a href="/">Sign up</a>{" "}
          {/* <img
            src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"
            alt=""
            className="img"
          />
          <span className="profile">
              <a href="/update" alt>nguyen van a </a>
            {" "}
            <a href="/out" className="sign_out">
              {" "}
              | Sign out
            </a>
          </span> */}
        </span>
      </div>
    </div>
  );
}

export default Header;
