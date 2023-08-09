import React from "react";

function Buy(props) {
  const removeProd = (prod) => {
    const newList = props.listOfProd.filter((item) => item[0] !== prod);
    props.setListOfProd(newList);
  };
  return (
    <div>
      {props.listOfProd.map((prod) => {
        return (
          <>
            <h1>{prod[0]}</h1>
            <p>{prod[1]}</p>
            <button onClick={() => removeProd(prod[0])}>x</button>
          </>
        );
      })}
    </div>
  );
}

export default Buy;
