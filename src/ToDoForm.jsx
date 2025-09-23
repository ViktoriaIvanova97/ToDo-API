import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoForm = () => {
  return (
    <div>
      <h2>TODO</h2>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default ToDoForm;
