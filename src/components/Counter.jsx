import { useDispatch } from "react-redux";
import { minusCounter, plusCounter, resetCounter } from "../reducers/Count";

function Counter() {
  const dispatch = useDispatch()
  return (
    <div className="counter-box">
      <button onClick={() => dispatch(plusCounter())}>Plus</button>
      <button onClick={() => dispatch(minusCounter())}>Minus</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default Counter;
