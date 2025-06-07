import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-muted mb-3">🛒 Tu carrito está vacío</h2>
      <p className="lead mb-4">Parece que aún no has agregado productos. ¡Descubre nuestras mejores ofertas!</p>
      <Link className="btn btn-outline-primary btn-lg" to="/">
        Ir a comprar
      </Link>
    </div>
  );
};

export default EmptyCart;

