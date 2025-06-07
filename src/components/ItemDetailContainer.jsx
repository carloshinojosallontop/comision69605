import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [invalid, setInvalid] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productCollection = collection(db, "products");
    const docRef = doc(productCollection, itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (invalid) {
    return (
      <div>
        <h2>El producto no existe!</h2>
        <Link className="btn btn-dark" to="/">
          Volver al home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        {loading ? <LoaderComponent /> : <ItemDetail detail={detail} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
