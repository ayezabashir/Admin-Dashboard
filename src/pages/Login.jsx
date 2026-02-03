import SignForm from "../components/SignForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    const adminUser = {
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
      name: "Admin User",
    };

    if (
      data.email === adminUser.email &&
      data.password === adminUser.password
    ) {
      login(adminUser);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <SignForm
      title="Login"
      submitText="Login"
      onSubmit={handleLogin}
    />
  );
};

export default Login;
