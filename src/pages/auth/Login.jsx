import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white">
          Login
        </button>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <Link
            className="text-blue-600"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}