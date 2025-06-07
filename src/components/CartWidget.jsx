import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div>
      {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
      <BsCart4 fontSize={"1.8rem"} />
    </div>
  );
};

export default CartWidget;
