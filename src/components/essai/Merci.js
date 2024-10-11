import React from "react";
import { motion } from "framer-motion";
import { mapStore } from "../../store/essai/map";
import { useInfoStore } from "../../store/essai/carInfo";
import { cn } from "../../utils/cn";

const Merci = () => {
  const { mapClicked } = mapStore();
  const { prénom, nom, label, address } = useInfoStore();
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: mapClicked ? "40%" : "100%",
        opacity: mapClicked ? 1 : 0,
      }}
      className={cn(
        "bg-[#F4F4F4] z-50 absolute w-screen h-[155vh] px-5 md:px-20 pt-14 mb-36 mt-6 md:mt-0"
      )}
    >
      <div className="pl-5 md:pl-0">
        <h1 className="semi text-xl md:text-2xl">
          Merci {prénom} {nom} de l&apos;intérêt que vous portez à notre marque.
        </h1>
        <p className="semi">Votre demande a été enregistrée.</p>
        <br />
        <br />
        <p className="semi text-lg">{label}</p>
        <p className="semi text-lg">{address}</p>
      </div>
      <div className="flex justify-center items-center pt-10">
        <h2 className="semi font-bold">Quoi d'autre?</h2>
      </div>
      <div className="grid md:grid-cols-3 pt-10">
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon1.png" width={1500} height={2000} className="w-14" />
          <p className="semi text-sm max-w-60">
            Le Distributeur a reçu votre requête
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon2.png" width={1500} height={2000} className="w-14" />
          <p className="semi w-60 md:w-full text-sm">
            Vous serez contacté(e) dans les plus brefs délais afin de convenir
            d&apos;un rendez-vous
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon3.png" width={1500} height={2000} className="w-14" />
          <p className="semi text-sm max-w-60">
            Vous allez apprécier la route avec Alfa Romeo !
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <button className=" bg-[#8f0c25] mt-14 flex items-center justify-center">
          <a
            href="https://www.alfaromeo.co.ma/"
            className="semi h-12 text-white px-7 flex justify-center items-center"
          >
            ACCUEIL
          </a>
        </button>
      </div> */}
    </motion.div>
  );
};

export default Merci;
