import { useContext, useState, useEffect } from "react";
import { Context } from "./Context";

const ToDoDelete = () => {
  const { tasks, clearCompletedTasks } = useContext(Context);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const activeTasks = tasks.filter((item) => !item.isCompleted).length;
    setCount(activeTasks);
  }, [tasks]);

  return (
    <div  className="style">
      <button onClick={clearCompletedTasks}>Очистить выполненные</button>
      <p>Осталось дел:{count}</p>
    </div>
  );
};

export default ToDoDelete;
