import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const todosCntx = useContext(TodosContext);
  return (
    <ul className="m-0 p-0 list-none mt-5 flex flex-col gap-2 items-center">
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
