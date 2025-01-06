import { RiUser3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const VehiclePanel = (props) => {
  return (
    <>
      <h5
        className="pt-5 flex justify-center text-2xl text-gray-400 w-full absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <IoIosArrowDown />
      </h5>
      <div className="grid grid-cols-1 gap-2">
        <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
        <div
          onClick={() => {
            props.setConfirmedRide(true);
            props.setVehiclePanel(false);
          }}
          className="flex items-center justify-between w-full p-3 border-2 rounded-xl active:border-black bg-gray-100"
        >
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
            alt=""
            className="h-12 w-1/6"
          />
          <div className="w-[60%]">
            <h4 className="font-medium text-base">
              Car{" "}
              <span>
                <RiUser3Fill className="inline-block text-sm mb-1" />4
              </span>
            </h4>
            <h5 className="font-medium text-base">2 mins away</h5>
            <p className="font-[600] text-sm text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className=" text-lg font-semibold">₹185</h2>
        </div>
        <div
          onClick={() => {
            props.setConfirmedRide(true);
            props.setVehiclePanel(false);
          }}
          className="flex items-center justify-between w-full p-3 border-2 rounded-xl active:border-black bg-gray-100"
        >
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            alt=""
            className="h-12 w-1/6"
          />
          <div className="w-[60%]">
            <h4 className="font-medium text-base">
              Motorcycle{" "}
              <span>
                <RiUser3Fill className="inline-block text-sm mb-1" />2
              </span>
            </h4>
            <h5 className="font-medium text-base">1 min away</h5>
            <p className="font-[600] text-sm text-gray-600">
              Affordable, motorcycle rides
            </p>
          </div>
          <h2 className=" text-lg font-semibold">₹75.1</h2>
        </div>
        <div
          onClick={() => {
            props.setConfirmedRide(true);
            props.setVehiclePanel(false);
          }}
          className="flex items-center justify-between w-full p-3 border-2 rounded-xl active:border-black bg-gray-100"
        >
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
            className="h-12 w-1/6"
          />
          <div className="w-[60%]">
            <h4 className="font-medium text-base">
              Auto{" "}
              <span>
                <RiUser3Fill className="inline-block text-sm mb-1" />3
              </span>
            </h4>
            <h5 className="font-medium text-base">4 mins away</h5>
            <p className="font-[600] text-sm text-gray-600">
              Affordable, auto rides
            </p>
          </div>
          <h2 className=" text-lg font-semibold">₹125</h2>
        </div>
      </div>
    </>
  );
};

export default VehiclePanel;
