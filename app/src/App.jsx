import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div
        style={{
          width:'500px',
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
