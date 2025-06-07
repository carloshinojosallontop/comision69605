import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${detail.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
    });
  };

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
      {purchase ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link className="btn btn-dark" to="/cart">
            Ir al Carrito
          </Link>
          <Link className="btn btn-dark" to="/">
            {" "}
            seguir comprando
          </Link>
        </div>
      ) : (
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
