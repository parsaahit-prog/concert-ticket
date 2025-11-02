import { useState } from "react";
import LoginForm from "./components/LoginForm";
import { showErrorToast } from "../../utils/toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      showErrorToast("Please fill in both email and password fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showErrorToast("Please enter a valid email address");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      showErrorToast(
        "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character"
      );
      return;
    }
    localStorage.setItem("username", email);
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-black/90 via-black/70 to-black/60 relative">
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
