import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const counterData = useSelector((state) => state.counter.value);

  console.log(counterData);
  const dispatch = useDispatch();

  const update = () => {
    dispatch(increment());
  };
  const minusUpdate = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>My count {counterData}</h1>
      <div>
        <button onClick={update}>plus</button>
        <button onClick={minusUpdate}>minus</button>
      </div>
      <div>
        <h2>Post page are here</h2>
      </div>
    </div>
  );
}

export default App;
