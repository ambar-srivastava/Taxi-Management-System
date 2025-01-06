import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";

import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const UserHome = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRide, setConfirmedRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: "1.25rem",
        overflow: "auto",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        padding: "0 1.25rem",
        overflow: "hidden",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmedRide) {
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRide]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="relative h-screen w-screen">
      <h2 className="text-3xl font-bold text-slate-900 absolute left-5 top-5 ">
        Cabs 24x7
      </h2>
      <div className="h-screen w-screen">
        {/* temporary image */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-6 right-6 text-2xl font-bold opacity-0"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <IoIosArrowDown />
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[5.7rem] left-10 rounded-full bg-gray-800"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 overflow-hidden bg-white px-5">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="w-full bg-white fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 grid grid-cols-1"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmedRide={setConfirmedRide}
        />
      </div>
      <div
        ref={confirmedRideRef}
        className="w-full bg-white fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 grid grid-cols-1"
      >
        <ConfirmRide
          setConfirmedRide={setConfirmedRide}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="w-full bg-white fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 grid grid-cols-1"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="w-full bg-white fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 grid grid-cols-1"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default UserHome;
