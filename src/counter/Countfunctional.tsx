import React, { useState } from "react";

const Countfunctional = () => {
  const [count, setcount] = useState(0);

  const Incrementfunction = () => {
    setcount(count + 1);
  };

  const Decrementfunction = () => {
    setcount(count - 1);
  };

  return (
    <>
      <button onClick={Incrementfunction}>Increment</button>
      <h2>{count}</h2>
      <button onClick={Decrementfunction}>Decrement</button>
    </>
  );
};

export default Countfunctional;
