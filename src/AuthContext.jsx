import { useState } from "react";
import { useEffect } from "react";
import {
  loginUser,
  registerUser,
  getTasks,
  addTask,
  fetchDeleteTask,
  editTaskPatch,
  toggleTaskDone,
  deleteAllTask,
} from "./api";
import { Context } from "./Context";

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const login = async (username, password) => {
    const data = await loginUser(username, password);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);

    await fetchTasks(data.token);
  };

  const register = async (username, email, password, gender, age) => {
    const data = await registerUser(username, email, password, gender, age);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    await fetchTasks(data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setTasks([]);
    localStorage.removeItem("token");
  };

  const fetchTasks = async (authToken = token) => {
    if (!authToken) return;
    try {
      const data = await getTasks(authToken);
      setTasks(data);
    } catch (error) {
      console.log("Ошибка при загрузке задач:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const createTask = async (title) => {
    if (!token) return;
    try {
      await addTask(token, title);
      await fetchTasks();
    } catch (error) {
      console.log("Ошибка при добавлении задачи:", error);
    }
  };

  const deleteTask = async (id) => {
    if (!token) return;
    try {
      await fetchDeleteTask(token, id);
      await fetchTasks();
    } catch (error) {
      console.log("Ошибка при удалении задачи:", error);
    }
  };

  const editTask = async (id, title) => {
    if (!token) return;
    try {
      const updatedTask = await editTaskPatch(token, id, title);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, title: updatedTask.title } : task,
        ),
      );
      return updatedTask;
    } catch (error) {
      console.log("Ошибка при редактировании задачи:", error);
      throw error;
    }
  };

  const toggleDone = async (id, currentIsCompleted) => {
    try {
      const updatedTasks = await toggleTaskDone(id, token, !currentIsCompleted);
      const updatedTask = updatedTasks[0];
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, isCompleted: updatedTask.isCompleted } : t,
        ),
      );
    } catch (error) {
      console.error("Ошибка при обновлении isCompleted:", error);
    }
  };

  const clearCompletedTasks = async () => {
    if (!token) return;
    const completedTasks = tasks.filter((task) => task.isCompleted);
    try {
      await Promise.all(
        completedTasks.map((task) => deleteAllTask(token, task.id)),
      );
      setTasks((prev) => prev.filter((task) => !task.isCompleted));
    } catch (error) {
      console.log("Ошибка при удалении завершённых задач:", error);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        tasks,
        setTasks,
        fetchTasks,
        createTask,
        deleteTask,
        editTask,
        toggleDone,
        filter,
        setFilter,
        clearCompletedTasks,
        setSortOrder,
        sortOrder
      }}
    >
      {children}
    </Context.Provider>
  );
};
