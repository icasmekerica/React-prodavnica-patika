import React from "react";
import CartProduct from "./cartProduct";


const Cart = ({ cartProducts }) => (
    <div className="cart-container">
      <div style={{ fontFamily: 'Montserrat', fontWeight: '1000', fontSize: '60px', textAlign: 'left' }}>
        This is your cart:
        </div>;
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );

export default Cart;


/* <div style={{ fontFamily: 'Montserrat', fontWeight: '1000', fontSize: '60px', textAlign: 'center' }}>
  Your cart is empty.
</div>; */
