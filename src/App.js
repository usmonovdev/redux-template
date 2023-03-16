import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state.count)
  return (
    <div>
      <h1>Counter: {state}</h1>
      <Counter />
    </div>
  );
}

export default App;
