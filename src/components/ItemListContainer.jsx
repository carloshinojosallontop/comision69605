import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams, Link } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(list);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const formatCategory = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="container mt-4">
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {categoryId && (
            <Breadcrumb
              className="mb-4 px-3 py-2 rounded"
              style={{
                backgroundColor: "#e9f7fb",
                border: "1px solid #b6e0ef",
                fontSize: "0.95rem",
              }}
            >
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/" }}
                style={{ color: "#0dcaf0", fontWeight: "500" }}
              >
                Inicio
              </Breadcrumb.Item>
              <Breadcrumb.Item active style={{ fontWeight: "600" }}>
                {formatCategory(categoryId)}
              </Breadcrumb.Item>
            </Breadcrumb>
          )}

          <div className="text-center mb-4">
            <h1
              className="fw-bold"
              style={{
                color: "#212529",
                fontSize: "2.5rem",
                display: "inline-block",
                paddingBottom: "0.5rem",
              }}
            >
              {greeting} {categoryId && <span>{formatCategory(categoryId)}</span>}
            </h1>
          </div>

          {products.length > 0 ? (
            <ItemList products={products} />
          ) : (
            <p className="text-center text-muted">
              No hay productos disponibles en esta categoría.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;

