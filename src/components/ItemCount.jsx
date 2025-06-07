import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const comprar =()=>{
    onAdd(count)
  }
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
      <button className="btn btn-dark" onClick={comprar}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
