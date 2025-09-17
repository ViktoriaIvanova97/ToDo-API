import { useContext } from "react";
import { Context } from "./Context";

const TasksFilter = () => {
  const { setFilter } = useContext(Context);

  return (
    <div className="style">
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("activeTask")}>Активные</button>
      <button onClick={() => setFilter("completedTask")}>Завершённые</button>
    </div>
  );
};

export default TasksFilter;
