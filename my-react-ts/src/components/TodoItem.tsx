type TodoProps = {
  text: string;
  onDeleteTodo: () => void;
};

export const TodoItem = ({ text, onDeleteTodo }: TodoProps) => {
  return (
    <li className="box-border flex items-center justify-between text-sm w-full rounded bg-slate-300 m-0 px-[10px] py-[5px]">
      <span>{text}</span>
      <span onClick={onDeleteTodo} className="text-xs cursor-pointer">
        ❌
      </span>
    </li>
  );
};
