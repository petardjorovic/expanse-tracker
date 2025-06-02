import Button from "./components/Button";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <main className="w-[500px] my-[20px] mx-auto">
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
      <Button countValue={10} countHistory={[5, 2, 11]} />
    </main>
  );
}

export default App;
