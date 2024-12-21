import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Cabs 24x7</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="captain@example.com"
          />
          <h3 className="text-lg font-medium mt-7 mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="mt-10 bg-[#111] rounded px-4 py-2 w-full text-lg text-white"
            type="submit"
          >
            Login as Captain
          </button>
        </form>
        <p className=" mt-5 text-center font-medium">
          Want to Join out fleet?{" "}
          <Link to="/captain/signup" className="text-blue-500">
          Register as a Captain?
          </Link>
        </p>
      </div>
      <div>
        <Link to="/login">
          <button className="mb-2 bg-[#d5622d] rounded px-4 py-2 w-full text-lg text-white">
            Sign in as User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
