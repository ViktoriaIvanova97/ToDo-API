import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [changeForm, setChangeForm] = useState(false);

  const navigate = useNavigate();
  const { login, register } = useContext(Context);

  const handleRegister = async () => {
    try {
      await register(username, email, password, gender, age);
      alert("Регистрация успешна!");
      navigate("/todoform");
      setUsername("");
      setEmail("");
      setPassword("");
      setGender("");
      setAge("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Вход успешен!");
      navigate("/todoform");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return changeForm ? (
    <form className="registerForm" autoComplete="off">
      <h2>Регистрация</h2>
      <button type="button" onClick={() => setChangeForm(false)}>
        Перейти к авторизации
      </button>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя"
        autoComplete="off"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="new-password"
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Выберите пол</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Возраст"
        autoComplete="off"
      />
      <button type="button" onClick={handleRegister}>Зарегистрироваться</button>
    </form>
  ) : (
    <form className="registerForm" autoComplete="off">
      <h2>Авторизация</h2>
      <button type="button" onClick={() => setChangeForm(true)}>Перейти к регистрации</button>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="new-password"
      />
      <button type="button" onClick={handleLogin}>Войти</button>
    </form>
  );
};

export default RegisterForm;
