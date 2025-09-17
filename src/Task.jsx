import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";
const Task = ({ task }) => {
  const { deleteTask, isDoneChecked, editTitle } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.title);

  const handleDownEnter = (e) => {
    if (e.key === "Enter") {
      editTitle(task.id, editTask);
      setEditTask("");
      setEdit((edit) => !edit);
    }
  };
  return (
    <div className="style" style={{paddingTop:'10px'}}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => isDoneChecked(task.id)}
      />
      {!edit ? (
        <p className={task.isDone ? "active" : ""}>{task.title}</p>
      ) : (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          onKeyDown={handleDownEnter}
        />
      )}
      <button onClick={() => setEdit((edit) => !edit)}>Изменить</button>
      <button onClick={() => deleteTask(task.id)}>&times;</button>
    </div>
  );
};

export default Task;
