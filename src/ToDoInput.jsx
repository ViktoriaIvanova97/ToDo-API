import { useState, useContext } from "react";
import { Context } from "./Context";

const ToDoInput = () => {
  const [newTask, setNewTask] = useState("");
  const { createTask } = useContext(Context);

  const addNewTask = async () => {
    if (!newTask.trim()) return;
    try {
      await createTask(newTask);
      setNewTask("");
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  };

  return (
    <div className="style">
      <input style={{borderRadius:'5px'}}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addNewTask}>Добавить</button>
    </div>
  );
};

export default ToDoInput;
