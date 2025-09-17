import { useContext } from "react";
import { Context } from "./Context";

const DeleteCompleted = () => {
  const { setTasks } = useContext(Context);

  return (
    < div >
      <button
        onClick={() =>
          setTasks((tasks) => tasks.filter((item) => !item.isDone))
        }
      >
        Очистить выполненные
      </button>
    </div>
  );
};

export default DeleteCompleted;
