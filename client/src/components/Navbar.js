import { Link, Navigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Аттестация 4</h1>
        </Link>
        
        {user && <Link to="/test" className="test-btn">Test</Link>}

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="logout" onClick={handleLogout}>Выйти</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Войти</Link>
              <Link to="/signup">Регистрация</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
