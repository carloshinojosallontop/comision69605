import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((prod) => prod.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h1>
        {greeting} {categoryId && <span>{categoryId}</span>}
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
