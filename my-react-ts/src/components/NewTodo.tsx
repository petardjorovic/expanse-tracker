import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCntx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCntx.addTodo(enteredText);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="todo"
        style={{ fontSize: "14px", fontWeight: "600", marginBottom: "3px" }}
      >
        Todo text
      </label>
      <input
        type="text"
        id="todo"
        ref={textRef}
        style={{
          outline: "none",
          padding: "8px 10px 4px 10px",
          border: "none",
          borderBottom: "2px solid #1b1d24",
          backgroundColor: "#e1e4ed",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          fontSize: "16px",
        }}
      />
      <button
        style={{
          marginTop: "5px",
          cursor: "pointer",
          padding: "5px 10px",
          backgroundColor: "#d9b70d",
          borderRadius: "3px",
          border: "none",
          outline: "none",
          maxWidth: "90px",
        }}
      >
        Add todo
      </button>
    </form>
  );
};

export default NewTodo;
