export const registerUser = async (username, email, password, gender, age) => {
  try {
    const res = await fetch(
      "https://todo-redev.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, gender, age }),
      },
    );
    const response = await res.json();

    if (!res.ok) {
      const messages =
        response.errors?.map((e) => e.msg || e.message).join(", ") ||
        response.message;
      throw new Error(messages || `Ошибка регистрации, статус ${res.status}`);
    }

    return response;
  } catch (e) {
    alert("Ошибка при регистрации:", e.message);
    throw e;
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch("https://todo-redev.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const response = await res.json();

    if (!res.ok) {
      throw new Error(response.message || "Ошибка входа");
    }
    return response;
  } catch (e) {
    alert("Ошибка при логине ", e.message);
    throw e;
  }
};

export const getTasks = async (token) => {
  try {
    const res = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "GET",
      headers: {
        accept: " application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await res.json();
    if (!res.ok) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    console.log("Ошибка при получении задач:", error);
    throw error;
  }
};

export const addTask = async (token, title) => {
  try {
    const res = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });
    const response = await res.json();

    if (!res.ok) {
      throw new Error(response.message || "Ошибка добавления задачи");
    }
    return response;
  } catch (error) {
    console.log("Ошибка при отправке задвчи:", error);
    throw error;
  }
};

export const fetchDeleteTask = async (token, id) => {
  try {
    const res = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editTaskPatch = async (token, id, title) => {
  try {
    const res = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      },
    );

    const response = await res.json();
    if (!res.ok) {
      throw new Error(response.message || "Ошибка при редактировании задачи");
    }

    return response;
  } catch (error) {
    console.log("Ошибка при редактировании задачи:", error);
    throw error;
  }
};

export const toggleTaskDone = async (id, token, isCompleted) => {
  try {
    const res = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isCompleted }),
      },
    );
    const response = await res.json();
    if (!res.ok) throw new Error(response.message);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const deleteAllTask = async (token, id) => {
	try {
	  const res = await fetch(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
		method: "DELETE",
		headers: {
		  'accept': 'application/json',
		  'Authorization': `Bearer ${token}`
		}
	  });
	  const response = await res.json();
	  if (!res.ok) throw new Error(response.message || "Ошибка удаления задачи");
	  return response;
	} catch (error) {
	  console.log(error);
	  throw error;
	}
  };
  
