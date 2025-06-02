import { useContext, useRef, useState } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const todosCntx = useContext(TodosContext);
  //const textRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //const enteredText = textRef.current!.value;
    const enteredText = inputText;
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCntx.addTodo(enteredText);
    setInputText("");
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="text-sm font-semibold mt-1">
        Todo text
      </label>
      <input
        type="text"
        id="todo"
        //ref={textRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="pt-2 pl-[10px] pr-[10px] pb-1 border-b-2 border-b-slate-800 bg-slate-300 rounded-t text-base outline-none"
      />
      <button className="mt-1 cursor-pointer py-1 px-2 bg-yellow-600 rounded-[3px] outline-none max-w-[100px]">
        Add todo
      </button>
    </form>
  );
};

export default NewTodo;
