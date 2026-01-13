import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="Card">
      <h2>Counter</h2>

      <p>Count: {count}</p>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Input value: {text}</p>
    </div>
  );
}

export default Counter;
