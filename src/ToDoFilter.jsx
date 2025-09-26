import { useContext } from "react";
import { Context } from "./Context";

const ToDoFilter = () => {
  const { setFilter } = useContext(Context);

  return (
    <div>
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <button onClick={() => setFilter("completed")}>Завершённые</button>
    </div>
  );
};

export default ToDoFilter;
