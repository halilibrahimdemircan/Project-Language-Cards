import React from "react";
import Card from "../Card/Card";
import { data } from "../../helpers/data";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards-container">
      {data.map((el) => (
        <Card data={el} />
      ))}
    </div>
  );
}
