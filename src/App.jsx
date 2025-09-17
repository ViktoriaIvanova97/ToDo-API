import "./App.css";

import Input from "./Input";
import TasksList from "./TasksList";
import TasksFilter from "./TasksFilter";
import DeleteCompleted from "./DeleteCompleted";
import CountActive from "./CountActive";

function App() {
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
      <h2>To-Do List</h2>
      <div className="component">
        <Input />
      </div>
      <div className="component">
        <TasksList />
      </div>
      <div className="component">
        <TasksFilter />
      </div>
      <div
        className="component"
        style={{
          display: "flex",
          width: "370px",
          alignItems: "center",
          justifyContent: "space-between",
          color:'#333',
          fontWeight: '500',
        }}
      >
        <DeleteCompleted />
        <CountActive />
      </div>
    </div>
  );
}

export default App;
