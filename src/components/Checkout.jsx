import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const finalizarCompra = (dataDelForm) => {
    const orden = {
      buyer: {
        name: dataDelForm.name,
        address: dataDelForm.address,
        email: dataDelForm.email,
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-4">
      {orderId ? (
        <div className="text-center">
          <h2 className="mb-3">✅ Tu orden se generó con éxito</h2>
          <h3>Gracias por tu compra!. Vuelve Pronto</h3>
          <p className="mb-4">ID de seguimiento: <strong>{orderId}</strong></p>
          <Link className="btn btn-dark" to="/">Volver a inicio</Link>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-center">📝 Completa con tus datos para finalizar la compra</h2>
          <form onSubmit={handleSubmit(finalizarCompra)} className="row g-3">
            <div className="col-12">
              <input
                className="form-control"
                type="text"
                placeholder="Nombre completo"
                {...register("name", { required: true, minLength: 5 })}
              />
              {errors.name?.type === "required" && <span className="text-danger">Por favor complete el campo nombre</span>}
              {errors.name?.type === "minLength" && <span className="text-danger">El nombre debe tener al menos 5 caracteres</span>}
            </div>

            <div className="col-12">
              <input
                className="form-control"
                type="text"
                placeholder="Dirección completa"
                {...register("address", { required: true, minLength: 10, maxLength: 25 })}
              />
              {errors.address?.type === "required" && <span className="text-danger">Por favor complete la dirección</span>}
              {errors.address?.type === "minLength" && <span className="text-danger">La dirección debe tener al menos 10 caracteres</span>}
              {errors.address?.type === "maxLength" && <span className="text-danger">La dirección no debe exceder los 25 caracteres</span>}
            </div>

            <div className="col-md-6">
              <input
                className="form-control"
                type="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && <span className="text-danger">Por favor complete el campo correo</span>}
            </div>

            <div className="col-md-6">
              <input
                className="form-control"
                type="email"
                placeholder="Repetir correo electrónico"
                {...register("secondmail", {
                  required: true,
                  validate: {
                    equalsMails: (mail2) => mail2 === getValues().email,
                  },
                })}
              />
              {errors.secondmail?.type === "required" && <span className="text-danger">Por favor repita su correo</span>}
              {errors.secondmail?.type === "equalsMails" && <span className="text-danger">Los correos deben coincidir</span>}
            </div>

            <div className="col-12 text-center mt-3">
              <button className="btn btn-success" type="submit">🛒 Finalizar Compra</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;