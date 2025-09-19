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

    console.log(
      "Ответ сервера регистрации:",
      response,
      "res.ok:",
      res.ok,
      "status:",
      res.status,
    );

    if (!res.ok) {
      const messages =
        response.errors?.map((e) => e.msg || e.message).join(", ") ||
        response.message;
      throw new Error(messages || `Ошибка регистрации, статус ${res.status}`);
    }

    return response;
  } catch (e) {
    console.error("Ошибка при регистрации:", e);
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

    console.log(
      "Ответ сервера логина:",
      response,
      "res.ok:",
      res.ok,
      "status:",
      res.status,
    );

    if (!res.ok) {
      throw new Error(response.message || "Ошибка входа");
    }

    return response;
  } catch (e) {
    console.error("Ошибка при логине:", e);
    throw e;
  }
};
