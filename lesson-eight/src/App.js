import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const initialProducts = [
    {
      id: 0,
      name: "Baklava",
      count: 1,
    },
    {
      id: 1,
      name: "Cheese",
      count: 5,
    },
    {
      id: 2,
      name: "Spaghetti",
      count: 2,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
  }
  return (
    <>
      <Counter
        products={products}
        handleIncreaseClick={handleIncreaseClick}
        handleDecreaseClick={handleDecreaseClick}
      />
    </>
  );
}

export default App;
