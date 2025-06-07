import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, cartTotal, clear } = useContext(CartContext);

  const preConfirmation = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar todo el carrito?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3>🛒 Tu carrito está vacío</h3>
        <Link className="btn btn-primary mt-3" to="/">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🛒 Tu Carrito</h3>
      <div className="row">
        {cart.map((compra) => (
          <div
            key={compra.id}
            className="col-12 mb-3 p-3 border rounded d-flex align-items-center justify-content-between"
          >
            <img src={compra.img} alt={compra.name} style={{ width: "8rem" }} />
            <span className="fw-bold">{compra.name}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Precio Unitario: ${compra.price.toFixed(2)}</span>
            <span>Total: ${(compra.price * compra.quantity).toFixed(2)}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => removeItem(compra.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <h4>Total a Pagar: ${cartTotal().toFixed(2)}</h4>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-danger" onClick={preConfirmation}>
          Vaciar Carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar Compra
        </Link>
      </div>
      <div className="text-center mt-4">
        <Link className="btn btn-dark" to="/">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default CartView;
