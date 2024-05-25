import { Link } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <h2>Home</h2>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/login"}>
        <h2>Login</h2>
      </Link>

      {token && (
        <button
          onClick={handleLogout}
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          <h2>Logout</h2>
        </button>
      )}
    </div>
  );
};

export default Navbar;
