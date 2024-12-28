import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-[url(https://img.freepik.com/free-photo/yellow-black-sign-taxi-placed-top-car-night_181624-10624.jpg?t=st=1734723586~exp=1734727186~hmac=2edca5cfca551a91aefd19843c725e2fb4cf2413633a91af8782009f3884679c&w=996)] bg-cover bg-center h-screen pt-8 flex flex-col justify-between w-full">
      {/* <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      /> */}
      <h2 className="text-3xl font-bold ml-8 text-slate-200">Cabs 24x7</h2>
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-[1.8rem] font-bold">Get Started with Cabs 24x7</h2>
        <Link to="/login">
          <button className="w-full bg-black py-3 text-white rounded-lg mt-5">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
