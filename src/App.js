/*
import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('/productsData.json');
      console.log(response.data.products);
      setProducts(response.data.products);
    }

    fetchData();
  }, [])

/*
   const [products, setProducts] = useState([
    {
      id: 1,
      title: "Jordan 1",
      description:
        "The Jordan 1 is a legendary high-top basketball sneaker created by Nike for Michael Jordan.",
      amount: 0,
      image: "https://laced.imgix.net/products/9594a1e3-32c9-4a3d-a8b4-3d230a3b20c1.jpg?auto=format&fit=crop&w=1200"
    },
    {
      id: 2,
      title: "Jordan 3",
      description:
        "A classic mid-top sneaker designed by Nike for Michael Jordan, known for its iconic elephant print.",
      amount: 0,
      image: "https://laced.imgix.net/products/39c45069-472c-4297-8968-7e3464eb655a.jpg?auto=format&fit=crop&w=1200"
    },
    {
      id: 3,
      title: "Jordan 4",
      description:
        "A popular mid-top basketball sneaker crafted by Nike for Michael Jordan, featuring visible air units and distinctive design elements.",
      amount: 0,
      image: "https://laced.imgix.net/products/2c3fc004-93bf-44d6-ba1c-7d087c37a934.jpg?auto=format&fit=crop&w=1200"
    },
    {
      id: 4,
      title: "Jordan 5",
      description:
      "Iconic mid-top basketball sneaker with shark teeth midsole and reflective details.",
      amount: 0,
      image: "https://laced.imgix.net/products/1b7acb16-edb5-47fd-8164-e22b0acde1f3.jpg?auto=format&fit=crop&w=1200",
    }
  ]);
  */

  /*
  const addToCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });
  };
  
  const remFromCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          const a = cartNum - 1;
          setCartNum(a);
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
    });
  };

  /*
  const addToCart = () => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });

  };
  const remFromCart = () => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
    });

  };
*/

/*
  function calcCartNum(products) {
    const totalItems = products.reduce((acc, product) => acc + product.amount, 0);
    return totalItems;
  }
  return (
    <div className="App">
      <NavBar cartNum={cartNum} />
      <Products products={products} onAdd={addToCart} onRemove={remFromCart} />
    </div>
  );





}

export default App;

*/

import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import { useState, useEffect } from "react";  
import axios from "axios";  
import Cart from "./cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  const refreshCart = () => {
    const newProducts = products.filter((product) => product.amount > 0);
    setCartProducts(newProducts);
  };

  const updateCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/productsData.json');
      console.log(response.data.products);
      setProducts(response.data.products);
    }

    fetchData();
  }, [])

  const addToCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        if (product.amount === 1) {
          updateCart(product);
        } else {
          refreshCart();
        }
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });
  };

  const remFromCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          const a = cartNum - 1;
          setCartNum(a);
          refreshCart();
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
    });
  };


  function calcCartNum(products) {
    const totalItems = products.reduce((acc, product) => acc + product.amount, 0);
    return totalItems;
  }

  return (
    <BrowserRouter>
    <NavBar cartNum={cartNum} />
    <Routes>
      <Route
        path="/"
        element={
          <Products
            products={products}
            onAdd={addToCart}
            onRemove={remFromCart}
          />
        }
      />
       <Route
        path="/cart"
        element={<Cart cartProducts={cartProducts} />}
      />
    </Routes>
  </BrowserRouter>
);

}

export default App;
