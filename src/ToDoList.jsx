import { useContext, useMemo } from "react";
import { Context } from "./Context";
import Task from "./Task";

const TasksList = () => {
  const { tasks, filter, setSortOrder, sortOrder } = useContext(Context);

  const filteredAndSortedTasks = useMemo(() => {
    let result = tasks;

    if (filter === "active")
      result = result.filter((task) => !task.isCompleted);
    if (filter === "completed")
      result = result.filter((task) => task.isCompleted);

    result = [...result].sort((a, b) =>
      sortOrder === "desc" ? b.id - a.id : a.id - b.id,
    );

    return result;
  }, [tasks, filter, sortOrder]);

  return (
    <>
      <div className="style" style={{paddingBottom:'15px' }}>
        <button onClick={() => setSortOrder("desc")}>Новые сверуху</button>
        <button onClick={() => setSortOrder("asc")}>Новые снизу</button>
      </div>

      {filteredAndSortedTasks.length > 0 ? (
        filteredAndSortedTasks.map((task) => <Task key={task.id} task={task} />)
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
    </>
  );
};

export default TasksList;
