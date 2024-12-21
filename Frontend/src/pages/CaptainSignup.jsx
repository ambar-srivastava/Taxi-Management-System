import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Cabs 24x7</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your name</h3>
          <div className="flex gap-4 mb-8">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border text-lg w-1/2 placeholder:text-base"
              type="text"
              required
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="captain@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mt-7 mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-10 bg-[#111] rounded px-4 py-2 w-full text-lg text-white"
            type="submit"
          >
            Signup as Captain
          </button>
        </form>
        <p className=" mt-5 text-center font-medium">
          Already have an account?{" "}
          <Link to="/captain/login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs">
          By proceeding, you consent to get calls or SMS messages, including by
          automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
