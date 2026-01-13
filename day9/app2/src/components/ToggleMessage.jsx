import { useState } from "react";

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showList, setShowList] = useState(true);

  const todoItems = ["Learn React", "Practice Daily", "Build Projects"];

  return (
    <div className="toggleMessage">
      <h2>Toggle Message</h2>

      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && <p>This is shown using state</p>}

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul>
          {todoItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleMessage;
