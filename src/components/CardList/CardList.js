import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default CardList;
