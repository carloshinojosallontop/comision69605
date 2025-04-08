import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return (
      <button className="btn btn-outline-danger" type="button">
        <BsCart4 fontSize={"1.8rem"}/>
        <span className="badge bg-dark ms-1">0</span>
      </button>
    );
  };
  
  export default CartWidget;