import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { fetchPosts } from "./redux/features/postSlice";

function App() {
  const counterData = useSelector((state) => state.counter.value);
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const update = () => {
    dispatch(increment());
  };
  const minusUpdate = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="App">
      <h1>My count {counterData}</h1>
      <div>
        <button onClick={update}>plus</button>
        <button onClick={minusUpdate}>minus</button>
      </div>
      <div>
        <h2>Post page are here</h2>
        {posts.map((post, i) => (
          <div key={i}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
