import { Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registerform" replace /> } />
      <Route path="/registerform" element={<RegisterForm />} />
      <Route path="/todoform" element={<ToDoForm />} />
    </Routes>
  );
}

export default App;
