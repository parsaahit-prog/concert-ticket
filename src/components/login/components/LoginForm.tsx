import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import type React from "react";
import type { LoginFormProp } from "../types/Type";

const LoginForm: React.FC<LoginFormProp> = ({
  email,
  setEmail,
  password,
  setPassword,
  onLogin,
}) => {
  return (
    <div
      className="bg-white/20 backdrop-blur-md rounded-2xl p-10 w-96 shadow-lg flex flex-col gap-6 z-10"
    >
      <h2 className="text-2xl font-semibold text-white text-center">Login</h2>

      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button variant="primary" onClick={onLogin}>
        Login
      </Button>

      <p className="text-white text-sm text-center opacity-80">
        Don't have an account?{" "}
        <span className="underline cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
};

export default LoginForm;
