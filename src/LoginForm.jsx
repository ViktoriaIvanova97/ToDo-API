import { useState } from "react";
import { loginUser, registerUser } from "./api";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [changeForm, setChangeForm] = useState(true);

  const handleRegister = async () => {
    try {
      const data = await registerUser(username, email, password, gender, age);
      localStorage.setItem("token", data.token);
      alert("Регистрация успешна!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      alert("Вход успешен!");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  };

  return changeForm ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h2>Добро пожаловать</h2>
      <button onClick={() => setChangeForm(false)}>
        Перейти к регистрации
      </button>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h2>Регистрация</h2>
      <button onClick={() => setChangeForm(true)}>Перейти ко входу</button>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <label>
        <select
          value={gender}
          placeholder="Пол"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Возраст"
      />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}
