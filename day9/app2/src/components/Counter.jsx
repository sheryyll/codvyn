import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="counter">
      <h2>Counter</h2>

      <p>Count: {count}</p>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={handleChange}
      />

      <p>Input value: {text}</p>
    </div>
  );
}

export default Counter;
