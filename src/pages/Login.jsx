import SignForm from "../components/SignForm";

const Login = () => {
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };
  return (
    <SignForm
      title="Login"
      submitText="Login"
      onSubmit={handleLogin}
      footerText="Don't have an account?"
      footerActionText="Sign up now"
      footerActionPath="/signup"
    />
  );
};

export default Login;
