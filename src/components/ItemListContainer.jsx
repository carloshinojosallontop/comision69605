const ItemListContainer = (props) => {
  return (
    <div className="container mt-5">
      <h1>{props.greeting}</h1>
      {/* Aquí se mostrará el catálogo de productos en el futuro */}
    </div>
  );
};

export default ItemListContainer;