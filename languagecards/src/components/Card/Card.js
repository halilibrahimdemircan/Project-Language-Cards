import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [front, setFront] = useState(true);
  const reverse = () => {
    setFront(!front);
    console.log(front);
  };
  return (
    <div>
      {front ? (
        <div className="container" onClick={reverse}>
          <div className="image">
            <img src={props.data.image} alt="" />
          </div>
          <div>
            <p>{props.data.title}</p>
          </div>
        </div>
      ) : (
        <div className="container" onClick={reverse}>
          <div className="list">
            <ul>
              {props.data.desc.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
