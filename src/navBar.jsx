import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function navBar({ cartNum }) {
   
        return (
            <div className="navBar">
            <Link to="/" style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '20px', textDecoration: 'none', color: 'black' }}>
            My Store
            </Link>
            <Link to="/cart"  className="cart-items">
              <FaShoppingCart style={{ marginLeft: 10 }} />
              <div className="cart-num">{cartNum}</div>
            </Link>
          </div>
        );
      }
      

export default navBar
