import { useContext, useEffect } from "react";
import { Context } from "./Context";

const ToDoList = () => {
  const { tasks, fetchTasks, token } = useContext(Context);

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  return (
    <div>
      {!tasks || tasks.length === 0 ? (
        <h2>ПУСТО</h2>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ToDoList;
