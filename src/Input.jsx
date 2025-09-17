import { useState, useContext } from "react";
import { Context } from "./Context";

const Input = () => {
  const { setTasks } = useContext(Context);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };

  const handleTasks = () => {
    if (text.trim() === "") {
      setError("Поле не может быть пустым!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: text,
      isDone: false,
      createdAt: Date.now(),
    };

    setTasks((tasks) => [...tasks, newTask]);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleTasks();
  };

  return (
    <div className="style">
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Введите текст задачи..."
      />
      <button onClick={handleTasks}>Добавить</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
