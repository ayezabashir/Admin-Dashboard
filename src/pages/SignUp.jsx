import SignForm from '../components/SignForm';

const SignUp = () => {
     const handleSignUp = (data) => {
       console.log("Signup data:", data);
     };
  return (
    <SignForm
      title="Create Account"
      submitText="Sign Up"
      onSubmit={handleSignUp}
      showName={true}
      footerText="Already have an account?"
      footerActionText="Login"
      footerActionPath="/"
    />
  );
}

export default SignUp