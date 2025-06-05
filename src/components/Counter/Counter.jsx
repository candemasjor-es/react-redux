const Counter = () => {
  const incrementCounter = () => {
    console.log("Counter incremented");
  };
  const decrementCounter = () => {
    console.log("Counter decremented");
  };
  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <h1>0</h1>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export { Counter };
