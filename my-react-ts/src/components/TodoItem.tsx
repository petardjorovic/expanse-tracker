export const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = ({ text, onDeleteTodo }) => {
  return (
    <li
      style={{
        boxSizing: "border-box",
        display: "flex",
        padding: "5px 10px",
        margin: "0",
        backgroundColor: "#e1e4ed",
        borderRadius: "4px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "14px",
      }}
    >
      <span>{text}</span>
      <span
        onClick={onDeleteTodo}
        style={{ fontSize: "12px", cursor: "pointer" }}
      >
        ❌
      </span>
    </li>
  );
};
