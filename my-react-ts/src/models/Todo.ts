import { v4 as uuidv4 } from "uuid";

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = uuidv4();
    this.text = todoText;
  }
}

export default Todo;
