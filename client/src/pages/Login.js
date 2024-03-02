import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Вход</h3>

      <label>Email:</label>
      <input
        id="email-login"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Пароль:</label>
      <input
        id="password-login"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className="login-btn">Войти</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;

// aaqw@mail.ru
// rrr@mail.ru
// 1123TTt____

// {
//   "email": "aaqw@mail.ru",
//   "password": "1123TTt____"
// }
