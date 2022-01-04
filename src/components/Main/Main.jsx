import React from "react";
import { data } from "../../data";
import Swipe from "../Swipe/Swipe";
import "./main.css";
function Main() {
  console.log(data);
  return (
    <div className="main">
      <div className="content">
        <div className="wrap1">
          <div className="title">Rank</div>
          <div className="list_1">
            {/*  */}
            {data.map((e) => (
              <div className="content_list1" key={e.id}>
                <img src={e.img} alt="" />
                <div className="content_1">
                  <div className="name">{e.name}</div>
                  <div className="author">Author: {e.author}</div>
                </div>
              </div>
            ))}
          </div>


          <Swipe data={data} />

          <div className="title">Category</div>
          <div className="list_1">
            {/*  */}
            {data.map((e) => (
              <div className="content_list1" key={e.id}>
                <img src={e.img} alt="" />
                <div className="content_1">
                  <div className="name">{e.name}</div>
                  <div className="author">Author: {e.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wrap2">
          <div className="title_2">Author</div>
          {/*  */}
          {data.map((e) => (
            <div className="child" key={e.id}>
              <div className="content_1">
                <img src={e.img} alt="" className="img_1" />
                <div className="number">{e.id}</div>
              </div>
              <div className="content_2">
                <div className="name_2">Author: {e.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
