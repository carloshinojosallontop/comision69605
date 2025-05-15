import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div>
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>
        <span className="btn">{count}</span>
        <button className="btn btn-danger" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-dark">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
