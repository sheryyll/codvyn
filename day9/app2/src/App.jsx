import Card from "./components/Card";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";

function App() {
  return (
    <>
      <Card
        title="React Components"
        description="Components help break the UI into reusable pieces."
      />

      <Card
        title="Props"
        description="Props allow data to be passed from parent to child components."
      />

      <Card
        title="Reusability"
        description="Using props makes components flexible and reusable."
      />
      <Counter />

      <ToggleMessage />
    </>
  );
}

export default App;
