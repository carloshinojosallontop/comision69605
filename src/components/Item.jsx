import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ prod }) => {
  const { name, price, img, id } = prod;
  return (
    <div className="card" style={{ width: "18rem", marginTop: 15 }}>
      <Link to={`/item/${id}`}>
        <img
          className="card-img-top"
          src={img}
          alt={name}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="card-body">
        <Link to={`/item/${id}`} className="card-title-link">
          <h5 className="card-title">{name}</h5>
        </Link>
        <p className="card-text">${price},00</p>
        <Link className="btn btn-dark" to={`/item/${id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;

