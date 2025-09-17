import { Context } from "./Context";
import { useState, useEffect, useMemo, useCallback } from "react";

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return saved ? saved : "all";
  });
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const deleteTask = useCallback((id) => {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }, []);

  const isDoneChecked = useCallback((id) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  }, []);

  const editTitle = useCallback((id, newTitle) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
  }, []);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      return sortOrder === "desc"
        ? b.createdAt - a.createdAt
        : a.createdAt - b.createdAt;
    });
  }, [tasks, sortOrder]);

  const contextValue = useMemo(
    () => ({
      tasks: sortedTasks ,
      setTasks,
      deleteTask,
      isDoneChecked,
      editTitle,
      filter,
      setFilter,
      sortOrder,
      setSortOrder,
    }),
    [
      sortedTasks,
      setTasks,
      deleteTask,
      isDoneChecked,
      editTitle,
      filter,
      setFilter,
      sortOrder,
      setSortOrder,
    ],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
