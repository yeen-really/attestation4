import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Регистрация</h3>

      <label>Email:</label>
      <input
        id="email-signup"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Пароль:</label>
      <input
        id="password-signup"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className="signup-btn" disabled={isLoading}>Регистрация</button>
      {error && <div className="error">{error}</div>}

    </form>
  );
};

export default Signup;
