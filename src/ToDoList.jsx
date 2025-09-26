import { useContext } from "react";
import { Context } from "./Context";
import Task from "./Task";

const TasksList = () => {
  const { tasks, filter} = useContext(Context);

  const filteredTasks = tasks.filter((item) => {
    if (filter === "active") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;
    return true;
  });

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Пусто
        </p>
      )}
    </div>
  );
};

export default TasksList;
