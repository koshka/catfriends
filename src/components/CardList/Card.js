import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="card tc bg-light-green dib br3 pa3 grow bw2 shadow-5">
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set4&size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
