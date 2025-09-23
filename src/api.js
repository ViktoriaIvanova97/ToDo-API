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
