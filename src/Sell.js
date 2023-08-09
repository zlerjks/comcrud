import React, { useState } from "react";

function Sell({ setListOfProd, listOfProd }) {
  const [prodValue, setProdValue] = useState("");
  const [prodPrice, setProdPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setListOfProd((listOfProd) => [...listOfProd, [prodValue, prodPrice]]);
    setProdValue("");
    setProdPrice("");
  };

  return (
    <div>
      <h1>Seller</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="prodName">What's the product name?</label>
        <input
          onChange={(event) => setProdValue(event.target.value)}
          id="prodName"
          name="prodName"
          type="text"
          value={prodValue}
          required
        />
        <label htmlFor="prodPrice">What's the product price?</label>
        <input
          onChange={(event) => setProdPrice(event.target.value)}
          id="prodPrice"
          name="prodPrice"
          type="number"
          value={prodPrice}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Sell;
