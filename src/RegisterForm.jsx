import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [changeForm, setChangeForm] = useState(true);

  return changeForm ? (
    <div className="registerForm">
      <h2>Регистрация</h2>
      <button onClick={() => setChangeForm(false)}>
        Перейти к авторизации
      </button>
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
      <button>Зарегистрироваться</button>
    </div>
  ) : (
    <div className="registerForm">
      <h2>Авторизация</h2>
      <button onClick={() => setChangeForm(true)}>Перейти к регистрации</button>
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
      <button>Зарегистрироваться</button>
    </div>
  );
};

export default RegisterForm;
