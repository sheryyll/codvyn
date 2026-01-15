import Card from "./components/Card";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";
import UserList from "./components/UserList";

function App() {
  const cards = [
    { id: 1, title: "React", description: "A JavaScript library" },
    { id: 2, title: "Props", description: "Passing data to components" },
    { id: 3, title: "Components", description: "Reusable UI blocks" }
  ];

  return (
    <>
      <div className="card-container">
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    
      <Counter />

      <ToggleMessage />

      <UserList />
    </>
  );
}

export default App;
