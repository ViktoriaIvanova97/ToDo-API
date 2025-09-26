import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoFilter from "./ToDoFilter";
import ToDoDelete from "./ToDoDelete";
import "./App";

const ToDoForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h2>TODO</h2>
      <div className="component">
        <ToDoInput />
      </div>
      <div className="component">
        <ToDoList />
      </div>
      <div className="component">
        <ToDoFilter />
      </div>
      <div
        className="component"
        style={{
          display: "flex",
          width: "370px",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#333",
          fontWeight: "500",
        }}
      >
        <ToDoDelete />
      </div>
    </div>
  );
};

export default ToDoForm;
