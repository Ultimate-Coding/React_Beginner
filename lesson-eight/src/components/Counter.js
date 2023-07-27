function Counter({ products, handleIncreaseClick, handleDecreaseClick }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Counter;
