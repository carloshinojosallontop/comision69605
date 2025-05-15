import React from "react";
import ItemCount from "./ItemCount";


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
      <ItemCount stock={detail.stock} />
    </div>
  );
};

export default ItemDetail;
