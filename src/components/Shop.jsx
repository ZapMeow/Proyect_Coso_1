import '../css/Shop.css'

function Shop({ logged, cart, setCart }) {
  if (!logged) {
    return <h1>Debes loggearte para usar esta función</h1>;
  }

  if (cart.length === 0) {
    return <h2>No hay productos en el carrito</h2>;
  }

  const increaseQuantity = (title) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.title === title ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQuantity = (title) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.title === title ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // elimina si llega a 0
    );
  };

  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="shop-container">
      <h1>Tu carrito</h1>
      <div className="products-container">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <div className="cart-info">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                <div className="cart-controls">
                    <button onClick={() => decreaseQuantity(product.title)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.title)}>+</button>
                </div>
            </div>
            <div className="cart-subtotal">
                <p>${product.price} c/u</p>
                <p>$Subtotal: ${product.price * product.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <h3>Cantidad total de productos: {totalItems}</h3>
      <h3>Precio total: ${totalPrice}</h3>
    </div>
  );
}

export default Shop;
