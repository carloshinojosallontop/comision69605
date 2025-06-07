import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad);
    setPurchase(true);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `¡${detail.name} agregado al carrito!`,
      showConfirmButton: false,
      timer: 2000,
      background: "#f0fff4",
      color: "#198754",
      customClass: {
        title: "fw-semibold",
        popup: "border border-success",
      },
    });
  };

  const formatCategory = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="container mt-4">
      {detail && detail.category && detail.name && (
        <Breadcrumb
          className="mb-4 px-3 py-2 rounded"
          style={{
            backgroundColor: "#e9f7fb",
            border: "1px solid #b6e0ef",
            fontSize: "0.95rem",
          }}
        >
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Inicio
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: `/category/${detail.category}` }}
          >
            {formatCategory(detail.category)}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{detail.name}</Breadcrumb.Item>
        </Breadcrumb>
      )}
      <div className="text-center">
        <h1 className="mb-3">{detail.name}</h1>
        <img
          src={detail.img}
          alt={detail.name}
          className="img-fluid mb-3"
          style={{ maxHeight: "300px" }}
        />
        <p className="mb-1">{detail.description}</p>
        <p>Stock: {detail.stock} unidades</p>
        <p>Price: ${detail.price},00</p>
        {purchase ? (
          <div>
            <Link className="btn btn-success mt-3" to="/cart">
              Ir al Carrito
            </Link>
            <Link className="btn btn-dark mt-3" to="/">
              seguir comprando
            </Link>
          </div>
        ) : (
          <ItemCount stock={detail.stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
