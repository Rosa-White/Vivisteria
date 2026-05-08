import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
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
      setMessage("Login successful");
    } else {
      if (!name) {
        setMessage("Please enter your name");
        return;
      }
      setMessage("Account created successfully");
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
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
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