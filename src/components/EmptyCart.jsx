import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h2>Tu Carrito esta vacio</h2>
      <h3>Te invitamos a ver nuestros productos</h3>
      <Link className="btn btn-dark" to="/">
        Ir a comprar
      </Link>
    </div>
  );
};

export default EmptyCart;
