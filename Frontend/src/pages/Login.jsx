import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    if (password.length < 4) {
      setMessage("Password must be at least 4 characters");
      return;
    }

    if (isLogin) {
      await submitAuth("/api/login", { email, password });
      return;
    }

    if (!name) {
      setMessage("Please enter your name");
      return;
    }

    await submitAuth("/api/signup", { name, email, password });
  };

  const submitAuth = async (path, payload) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
        return;
      }

      setMessage(data.message);
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-purple-200">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
      >

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-2 text-blue-600 font-semibold"
        >
          {isLogin ? "Create Account" : "Back to Login"}
        </button>

        {message && (
          <p className="text-center mt-4 text-sm font-medium">
            {message}
          </p>
        )}

      </form>

    </div>
  );
};

export default Login;
