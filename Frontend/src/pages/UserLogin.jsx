import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
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
            placeholder="johndoe@example.com"
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
            className="mt-10 bg-[#10b461] rounded px-4 py-2 w-full text-lg text-white"
            type="submit"
          >
            Login as User
          </button>
        </form>
        <p className=" mt-5 text-center font-medium">
          New here?{" "}
          <Link to="/signup" className="text-blue-500">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain/login">
          <button className="mb-2 bg-[#E89D1B] rounded px-4 py-2 w-full text-lg text-white">
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
