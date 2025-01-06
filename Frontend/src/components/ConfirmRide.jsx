import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLocationMarker, HiLocationMarker } from "react-icons/hi";
import { GiMoneyStack } from "react-icons/gi";

const ConfirmRide = (props) => {
  return (
    <>
      <h5
        className="pt-5 flex justify-center text-2xl text-gray-400 w-full absolute top-0"
        onClick={() => {
          props.setConfirmedRide(false);
        }}
      >
        <IoIosArrowDown />
      </h5>
      <div>
        <h3 className="text-2xl font-semibold mb-3">Confirm your ride</h3>
        <div className="flex justify-between flex-col items-center gap-2">
          <img
            className="h-24"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
            alt="ride"
          />
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
          <button
            onClick={() => {
              props.setConfirmedRide(false);
              props.setVehicleFound(true);
            }}
            className="w-full mt-5 bg-[#10b461] text-white font-semibold p-3 rounded-lg uppercase tracking-wider"
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmRide;
