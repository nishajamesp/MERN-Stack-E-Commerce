import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const userInfo =
    localStorage.getItem("userInfo");

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    navigate("/login");
  };

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          MERN Shop
        </h1>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>

          {!userInfo ? (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logoutHandler}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;