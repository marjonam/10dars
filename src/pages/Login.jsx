import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };

  return (
    <div
      className="h-screen grid place-items-center w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
      }}
    >
      <div className=" p-8 rounded-lg  max-w-md w-full">
        <h2 className="text-4xl text-center mb-5 font-bold text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label>
            <input
              className=" input backdrop-blur-xl border-2"
              type="email"
              placeholder="email"
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="password"
              className="input backdrop-blur-xl border-2 "
              required
            />
          </label>
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            {isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                Loading...
              </button>
            )}
            {!isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                Login
              </button>
            )}
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </form>

        <h2 className="mt-6">
          if you don't have an account, please
          <Link to="/register" className="bg-white underline text-black ml-1">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
