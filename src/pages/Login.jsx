import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="h-screen flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-75 flex flex-col items-center gap-5">
        <div className="relative w-full flex flex-col gap-2">
          <label className="text-lg " htmlFor="email">Email</label>
          <input
            className="w-full rounded-2xl px-4 py-2 bg-gray-200"
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && <p className="absolute -bottom-6 text-red-600">{errors.email.message}</p>}
        </div>

        <div className="relative w-full flex flex-col gap-2">
          <label className="text-lg " htmlFor="password">Password</label>
          <input
            className="w-full rounded-2xl px-4 py-2 bg-gray-200"
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
          />
          {errors.password && <p className="absolute -bottom-6 text-red-600">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full mt-5 rounded-2xl px-4 py-2 bg-black text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
