import { GiMoneyStack } from "react-icons/gi";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const WaitingForDriver = (props) => {
  return (
    <>
      <h5
        className="pt-5 flex justify-center text-2xl text-gray-400 w-full absolute top-0"
        onClick={() => props.setWaitingForDriver(false)}
      >
        <IoIosArrowDown />
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
          alt="ride"
        />
        <div className="text-right">
          <h2 className=" text-lg font-medium">Ambar</h2>
          <h4 className=" text-xl font-semibold -my-1">UP43 AB 2531</h4>
          <p className=" text-sm text-gray-600 ">Hero Splendor</p>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <HiOutlineLocationMarker className="text-xl" />
            <div>
              <h3 className="text-lg font-semibold">234/A - 523</h3>
              <p className="text-sm text-gray-600 -mt-1 font-medium">
                {" "}
                Sector 43, Paris, France
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <HiLocationMarker className="text-xl" />
            <div>
              <h3 className="text-lg font-semibold">723/32B - 92</h3>
              <p className="text-sm text-gray-600 -mt-1 font-medium">
                {" "}
                Sector 70, Paris, France
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <GiMoneyStack color="#10b461" className="text-xl" />
            <div>
              <h3 className="text-lg font-semibold">₹ 192.50</h3>
              <p className="text-sm text-gray-600 -mt-1 font-medium">
                {" "}
                Payment - Cash
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
