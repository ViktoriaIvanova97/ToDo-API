import { useState } from "react";
import { useEffect } from "react";
import { loginUser, registerUser, getTasks } from "./api";
import { Context } from "./Context";

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [tasks, setTasks] = useState([]);

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
    setTasks([])
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

  return (
    <Context.Provider value={{ user, token, login, register, logout, tasks,fetchTasks }}>
      {children}
    </Context.Provider>
  );
};
