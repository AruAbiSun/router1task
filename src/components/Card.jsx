import React from "react";

const Card = ({ item, index }) => {
  return (
    <div key={index} class="col">
      <div class="card">
        <img src={item.image} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{item.head}</h5>
          <p class="card-text">{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
