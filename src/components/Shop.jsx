import '../css/Shop.css'

function Shop({ logged, cart = [], updateCart }) {
  if (!logged) return <h1>Debes loggearte para usar esta función</h1>;

  // Agrupa productos por título y cuenta la cantidad
  const groupedProducts = cart.reduce((acc, product) => {
    if (acc[product.title]) {
      acc[product.title].quantity += 1;
    } else {
      acc[product.title] = { ...product, quantity: 1 };
    }
    return acc;
  }, {});

  const groupedArray = Object.values(groupedProducts);

  // Calcula el total
  const total = groupedArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Función para agregar 1 producto más
  const handleAdd = (item) => {
    const products = JSON.parse(localStorage.getItem('productos')) || [];
    products.push(item); // agrega una copia más
    localStorage.setItem('productos', JSON.stringify(products));
    updateCart(); // refresca el estado del carrito en MainPage
  };

  // Función para quitar 1 producto
  const handleRemove = (item) => {
    const products = JSON.parse(localStorage.getItem('productos')) || [];
    const index = products.findIndex((p) => p.title === item.title);
    if (index !== -1) {
      products.splice(index, 1); // elimina solo una ocurrencia
      localStorage.setItem('productos', JSON.stringify(products));
      updateCart(); // refresca el estado
    }
  };

  return (
    <div className="shop-container">
      <h1>Tu carrito</h1>

      {/* Botón opcional para actualizar manualmente */}
      <button onClick={updateCart}>🔄 Actualizar carrito</button>

      {groupedArray.length === 0 ? (
        <p>El carrito está vacío 🛒</p>
      ) : (
        <>
          {groupedArray.map((item, i) => (
            <div key={i} className="cart-item">
              <img src={item.image} alt="image" />
              <div>
                <h1>{item.title}</h1>
                <p>${item.price} | ${item.price * item.quantity}</p>
              </div>
              <div>
                <button onClick={() =>{handleRemove(item)}}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleAdd(item)}>+</button>
              </div>

              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total del carrito: ${total}</h2>
        </>
      )}
    </div>
  );
}

export default Shop;
