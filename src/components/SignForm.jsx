import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignForm = ({
  title,
  submitText,
  onSubmit,
  showName = false,
  footerText,
  footerActionText,
  footerActionPath,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  return (
    <form
      className="h-screen flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-75 flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {showName && (
          <div className="relative w-full flex flex-col gap-2">
            <label className="text-lg">Name</label>
            <input
              type="text"
              className="w-full rounded-2xl px-4 py-2 bg-gray-200"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
            />
            {errors.name && (
              <p className="absolute -bottom-6 text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>
        )}
        <div className="relative w-full flex flex-col gap-2">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="w-full rounded-2xl px-4 py-2 bg-gray-200"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="absolute -bottom-6 text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative w-full flex flex-col gap-2">
          <label className="text-lg">Password</label>
          <input
            className="w-full rounded-2xl px-4 py-2 bg-gray-200"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="absolute -bottom-6 text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-5 rounded-2xl px-4 py-2 bg-black text-white"
        >
          {submitText}
        </button>
        <div className="flex justify-center items-center gap-2">
          <p>{footerText}</p>
          <button
            type="button"
            onClick={() => nav(footerActionPath)}
            className="text-lg cursor-pointer font-semibold hover:underline"
          >
            {footerActionText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignForm;
