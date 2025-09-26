import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFilter from "./ToDoFilter";
import ToDoDelete from "./ToDoDelete";

const ToDoForm = () => {
  return (
    <div>
      <h2>TODO</h2>
      <ToDoInput />
      <ToDoList />
      <ToDoFilter />
      <ToDoDelete />
    </div>
  );
};

export default ToDoForm;
