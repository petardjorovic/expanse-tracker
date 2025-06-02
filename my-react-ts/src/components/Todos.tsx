import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCntx = useContext(TodosContext);
  return (
    <ul
      style={{
        margin: "0",
        padding: "0",
        listStyle: "none",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {todosCntx.todos.map((t) => {
        return (
          <TodoItem
            text={t.text}
            key={t.id}
            onDeleteTodo={() => todosCntx.deleteTodo(t.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
