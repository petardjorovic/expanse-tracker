import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosCntx = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosCntx>({
  todos: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newEnteredTodo = new Todo(text);
    setTodos((prev) => [...prev, newEnteredTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const contextValuObj: TodosCntx = {
    todos: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValuObj}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
