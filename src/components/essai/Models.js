import React from "react";
import { useCarStore } from "../../store/essai/car";

const Models = () => {
  const { car, updateCar } = useCarStore();
  return (
    <div className="mx-10 md:mx-20 py-20 ">
      <h2 className="text-lg font-semibold pb-10">Sélectionnez un modèle</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4  md:gap-x-14">
        {cars.map((item) => {
          return (
            <div
              key={item.value}
              className=""
              onClick={() => updateCar(item.value)}
            >
              <div className="">
                <img
                  about="model"
                  alt={item.value}
                  src={item.image}
                  width={1500}
                  height={1500}
                  className="md:w-64"
                />
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  type="radio"
                  name="model"
                  checked={car === item.value}
                  id={item.value}
                  value={item.value}
                />
                <label className="semi text-lg">{item.label}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;

const cars = [
  { image: "/giulia.png", label: "Giulia", value: "83-620" },
  { image: "/stelvio.png", label: "Stelvio", value: "83-630" },
  { image: "/tonale.png", label: "Tonale", value: "Tonale Diesel" },
  {
    image: "/stelvioqd.png",
    label: "Stelvio Quadrifoglio",
    value: "Stelvio Quadrifoglio",
  },
  {
    image: "/giuliaqd.png",
    label: "Giulia Quadrifoglio",
    value: "Giulia Quadrifoglio",
  },
];
