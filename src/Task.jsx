import { useContext, useState } from "react";
import { Context } from "./Context";

const Task = ({ task }) => {
  const { deleteTask, editTask, setTasks, toggleDone } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      try {
        const updatedTask = await editTask(task.id, editTitle);
        setTasks((prev) =>
          prev.map((t) =>
            t.id === task.id ? { ...t, title: updatedTask.title } : t,
          ),
        );
        setEdit(false);
      } catch (error) {
        console.log("Ошибка при редактировании:", error);
      }
    }
  };

  return (
    <div
      className="style"
      style={{
        paddingTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        type="checkbox"
        checked={!!task.isCompleted}
        onChange={() => toggleDone(task.id, task.isCompleted)}
      />

      {!edit ? (
        <span
          style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
        >
          {task.title}
        </span>
      ) : (
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}

      <button
        onClick={() => {
          setEdit(!edit);
          setEditTitle(task.title);
        }}
      >
        Изменить
      </button>
      <button onClick={() => deleteTask(task.id)}>&times;</button>
    </div>
  );
};

export default Task;
