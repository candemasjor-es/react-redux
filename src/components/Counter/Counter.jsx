import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    console.log("Counter incremented");
    dispatch(increment())
  };
  const decrementCounter = () => {
    console.log("Counter decremented");
  };
  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <h1>{count}</h1>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export { Counter };
