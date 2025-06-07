import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 style={{ fontSize: "6rem", color: "#dc3545" }}>404</h1>
      <h3 className="mb-3">Página no encontrada</h3>
      <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default PageNotFound;
