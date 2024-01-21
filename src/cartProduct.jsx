import React from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";


const CartProduct = ({ product, onAdd, onRemove }) => {
 
    const design = { margin: 10, borderStyle: "solid", borderColor: "black", borderWidth: 5 };

  
    return (
        <div className="card-cart" style={design}>
            <img className="card-img-left" src={product.image} alt={product.title} style={{ width: 200, height: 200 }} />
            <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '30px', textAlign: 'center' }}>{product.title}</h3>
                <p className="card-text" style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>
                    {product.description}
                </p>
                
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: '1000', fontSize: '20px', textAlign: 'center' }}>Amount: {product.amount}</h3>
            </div>
        </div>
    );
};

export default CartProduct;
  