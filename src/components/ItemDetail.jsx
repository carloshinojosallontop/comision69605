import React from "react";
const ItemDetail = ({ detail }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{detail.name}</h1>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Stock: {detail.stock} unidades</p>
      <p>Price: {detail.price},00</p>
    </div>
  );
};

export default ItemDetail;
