import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Drawing")];

  return (
    <div className="App">
      <h1>GOODMORNING</h1>
      <Todos items={todos} />
    </div>
  );
}

export default App;
