import FormInput from "../components/FormInput";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

function Register() {
  const { register, isPending } = useRegister();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");
    register(email, displayName, password);
  };

  return (
    <main>
      <section className="w-full grid place-items-center h-screen">
        <form
          onSubmit={handleRegister}
          className="flex w-full max-w-96 flex-col"
        >
          <h2 className="text-3xl text-center font-bold mb-5">Register</h2>
          <FormInput label="Display Name:" name="displayName" type="text" />
          <FormInput label="Email:" name="email" type="email" />
          <FormInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            label="password"
            name="password"
          />

          <div className="flex gap-2 mt-5">
            {isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                Loading...
              </button>
            )}
            {!isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                SingUp
              </button>
            )}
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </form>
        <h2 className="mt-4">
          <Link className="font-bold" to="/">
            back to login
          </Link>
        </h2>
      </section>
    </main>
  );
}

export default Register;
