import React from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";


const OneProduct = ({ product, onAdd, onRemove }) => {
 
    const design = { margin: 10, borderStyle: "solid", borderColor: "black", borderWidth: 5 };

  
    return (
        <div className="card" style={design}>
            <img className="card-img-top" src={product.image} alt={product.title} style={{ width: 200, height: 200 }} />
            <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '30px', textAlign: 'center' }}>{product.title}</h3>
                <p className="card-text" style={{ fontFamily: 'Montserrat', fontWeight: '500', textAlign: 'center'  }}>
                    {product.description}
                </p>
                <button className="btn" onClick={() => onAdd(product.id)}>
                    <FaCirclePlus />
                </button>
                <button className="btn" onClick={() => onRemove(product.id)}>
                    <FaCircleMinus />
                </button>
            </div>
        </div>
    );
};

export default OneProduct;



/*
import React from 'react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const OneProduct = ({ product, onAdd, onRemove }) => {
    const design = { margin: 10, borderStyle: "solid", borderColor: "black" };

    return (
        <div className="card" style={design}>
            <img className="card-img-top" src={product.image} alt={product.title} style={{ width: 200, height: 200 }} />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">
                    {product.description}
                    {/* Product description where we can read more details about it. }
                </p>
                <button className="btn" onClick={() => onAdd(product.id)}>
                    <FaCirclePlus />
                </button>
                <button className="btn" onClick={() => onRemove(product.id)}>
                    <FaCircleMinus />
                </button>
            </div>
        </div>
    );
};

export default OneProduct;

import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const OneProduct = ({ product, onAdd, onRemove  })  => {
    const design = { margin: 10, borderStyle: "solid", borderColor: "black",};

    const addToCart = () => {
         product.amount = product.amount + 1;
         console.log("product id=", product.id, "amount=", product.amount);
      };
    

      const remFromCart = () => {
         if (product.amount > 0) {
           product.amount = product.amount - 1;
           console.log("product id=", product.id, "amount=", product.amount);
         } else {
           alert("Amount of product is already 0.");
         }
      };

      
    

    return (
        <div className="card" style={design}>
          <img className="card-img-top" src={product.image} alt={product.title} style={{ width: 200, height: 200 }}/>
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">"{product.description}
              Product description where we can read more details about it.
            </p>
            <button className="btn" onClick={() => onAdd(product.id)}>
                <FaCirclePlus />
            </button>
            <button className="btn" onClick={() => onRemove(product.id)}>
                 <FaCircleMinus />
            </button>
          </div>
        </div>
      );
    };
    

export default OneProduct; */
