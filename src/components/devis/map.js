import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInfoStore } from "../../store/devis/carInfo";
import { cityInfo } from "../../data/address";
import { mapStore } from "../../store/devis/map";
import { cn } from "../../utils/cn";
const Map = ({ cityId }) => {
  console.log(cityId);
  const Casablanca =
    cityId <= 3
      ? cityInfo[0].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Rabat =
    cityId === 4
      ? cityInfo[1].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Tanger =
    cityId === 5
      ? cityInfo[2].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Jadida =
    cityId === 6
      ? cityInfo[3].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Marrakech =
    cityId <= 8 || cityId >= 7
      ? cityInfo[4].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Agadir =
    cityId === 9
      ? cityInfo[5].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Oujda =
    cityId === 10
      ? cityInfo[6].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  const Fes =
    cityId === 11
      ? cityInfo[7].sections.filter((gg) => gg.id === Number(cityId))[0]
      : "";
  console.log(Casablanca);
  return (
    <div>
      {Number(cityId) <= 3 && (
        <CitiesComp city={Casablanca} cities={0} cityId={cityId} />
      )}
      {Number(cityId) === 4 && (
        <CitiesComp city={Rabat} cities={1} cityId={cityId} />
      )}
      {Number(cityId) === 5 && (
        <CitiesComp city={Tanger} cities={2} cityId={cityId} />
      )}
      {Number(cityId) === 6 && (
        <CitiesComp city={Jadida} cities={3} cityId={cityId} />
      )}
      {(Number(cityId) <= 8 || Number(cityId) >= 7) && (
        <CitiesComp city={Marrakech} cities={4} cityId={cityId} />
      )}
      {Number(cityId) === 9 && (
        <CitiesComp city={Agadir} cities={5} cityId={cityId} />
      )}
      {Number(cityId) === 10 && (
        <CitiesComp city={Oujda} cities={6} cityId={cityId} />
      )}
      {Number(cityId) === 11 && (
        <CitiesComp city={Fes} cities={7} cityId={cityId} />
      )}
    </div>
  );
};

export default Map;

const CitiesComp = ({ city, cities, cityId }) => {
  console.log(city);
  const {
    address,

    done,
    sec,

    map,
  } = useInfoStore();
  console.log(cities);
  const { updateMapClicked, mapClicked } = mapStore();
  const { updateAddress } = useInfoStore();
  const [selectedMap, setSelectedMap] = useState("");
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: city ? "2%" : "100%",
        opacity: city ? 1 : 0,
      }}
      className={cn(
        "relative bg-[#F4F4F4] w-full h-full -z-10 md:z-10 py-3 mt-20",
        mapClicked ? "-z-50" : "z-50"
      )}
    >
      <p className="semi bg-[#F4F4F4] md:text-2xl pl-5 pb-5">
        SÉLECTIONNEZ UN DE NOS DISTRIBUTEURS
      </p>
      <iframe
        src={city?.map}
        className=" w-full h-screen md:h-[40rem]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-[#F4F4F4] left-3 absolute top-12 md:top-6 md:h-[40rem] w-[23rem] md:w-[28rem] mt-10">
        <p className="semi text-center border-b border-black text-sm py-5">
          {address}
        </p>
        <div className="flex flex-col gap-4">
          {cityInfo[cities].sections.length > 0 ? (
            cityInfo[cities]?.sections?.map((bb, ik) => (
              <div
                onClick={() => {
                  setSelectedMap(bb.map);
                  updateAddress(bb.address);
                }}
                key={bb.sec}
                className="hover:bg-white pl-5 md:w-[28rem] py-5"
              >
                <p className="semi ">
                  {ik + 1}-{bb.label}
                </p>
                <p className="text-sm">
                  Services : Business Center | Spécialiste
                </p>
                <p className="pb-3">{bb.address}</p>
                {bb.id === Number(cityId) ? (
                  <button
                    onClick={() => updateMapClicked(true)}
                    className="semi bg-[#292B35] text-white px-4 py-2"
                  >
                    SÉLECTIONNER
                  </button>
                ) : (
                  <a href={`/?cityId=${bb.id}`}>
                    <button className="semi bg-[#292B35] text-white px-4 py-2">
                      SÉLECTIONNER
                    </button>
                  </a>
                )}
              </div>
            ))
          ) : (
            <>not found</>
          )}
        </div>
      </div>
    </motion.div>
  );
};
