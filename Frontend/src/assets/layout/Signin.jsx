import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    login();
    navigate("/home", { replace: true });
  };

  return (
    <div id="signin" className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="group relative w-full max-w-95 p-0.5 rounded-2xl bg-linear-to-r from-cyan-600 via-cyan-500 to-cyan-700 hover:scale-105 transition duration-500">
        <div className="bg-black rounded-2xl p-8 text-white shadow-2xl group-hover:bg-linear-to-br group-hover:from-black group-hover:to-cyan-950 transition duration-500">
          <h1 className="text-3xl font-bold text-center mb-2">Sign In</h1>
          <p className="text-gray-400 text-center mb-6">Access your account to explore the site.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-black border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:border-cyan-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 rounded-lg bg-black border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:border-cyan-400 transition"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-lg font-bold bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-600/50 hover:shadow-cyan-500/80 hover:scale-105 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
