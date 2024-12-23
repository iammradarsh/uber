import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

// Image Import
import blackCarImage from "../assets/img/black_car.png";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  // const panelCloseRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        display: "block",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        display: "none",
      });
    }
  }, [panelOpen]);

  return (
    <div className="relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png"
        alt=""
      />
      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-fit p-6 bg-white">
          <div className="w-full flex justify-between items-center">
            <h4 className="text-3xl font-bold">Find a trip</h4>
            <i
              onClick={() => {
                setPanelOpen(!panelOpen);
              }}
              className={`ri-arrow-down-s-line text-3xl transition-all ${
                panelOpen ? "opacity-100" : "opacity-0 rotate-180"
              }`}
            ></i>
          </div>

          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[55%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className=" bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className=" bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 px-6">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between">
          <div className="flex gap-4">
            <img className="h-12" src={blackCarImage} alt="black_car" />
            <div className="w-3/4">
              <h4 className="font-medium text-lg">
                UberGo{" "}
                <span>
                  <i class="ri-user-fill">4</i>
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                {" "}
                Affordable, compact rides
              </p>
            </div>
          </div>

          <h2 className="text-lg font-semibold">₹123.07</h2>
        </div>
        <div className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between">
          <div className="flex gap-4">
            <img
              className="h-12"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="black_car"
            />
            <div className="w-3/4">
              <h4 className="font-medium text-lg">
                Moto{" "}
                <span>
                  <i class="ri-user-fill">1</i>
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 3 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                {" "}
                Affordable, motorcycle ride
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold">₹65.17</h2>
        </div>
        <div className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between">
          <div className="flex gap-4">
            <img
              className="h-12"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="black_car"
            />
            <div className="w-3/4">
              <h4 className="font-medium text-lg">
                UberAuto{" "}
                <span>
                  <i class="ri-user-fill">3</i>
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                {" "}
                Affordable, Auto ride
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold">₹118.21</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
