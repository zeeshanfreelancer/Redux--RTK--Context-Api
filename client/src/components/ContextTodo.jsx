import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function ContextTodo() {
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="todo-container">
      <h2>Context API Todo</h2>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
