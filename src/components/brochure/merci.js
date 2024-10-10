import React from "react";
import { useInfoStore } from "../../store/brochure/carInfo";
import { motion } from "framer-motion";
const Merci = () => {
  const { prénom, nom } = useInfoStore();
  const { done } = useInfoStore();

  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: done !== null ? "14%" : "100%",
        opacity: done !== null ? 1 : 0,
      }}
      className="z-50 w-full pb-48 md:py-28 bg-[#F4F4F4] "
    >
      <div className="flex justify-center items-center pl-5 md:pl-0">
        <h1 className="semi text-xl md:text-2xl">
          Merci {prénom} {nom} de l&apos;intérêt que vous portez à notre marque.
        </h1>

        <br />
      </div>
      <div className="flex justify-center items-center pt-44 md:pt-10">
        <h2 className="semi font-bold">Quoi d'autre?</h2>
      </div>
      <div className="grid md:grid-cols-3 pt-10">
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-10 md:pt-0">
          {/* <p className="semi text-sm max-w-80">
            Découvrez les brochures des autres modèles
          </p>
          <button className=" border-[#8f0c25] border-2 bg-white md:mt-14 flex items-center justify-center">
            <a
              href="https://www.alfaromeo.fr/brochure"
              className="semi h-12 text-black px-7 flex justify-center items-center"
            >
              EN SAVOIR PLUS
            </a>
          </button> */}
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-10 md:pt-0">
          <p className="semi text-sm max-w-80">
            Téléchargez votre brochure. Vous allez également recevoir un email
            avec un lien pour la télécharger.
          </p>
          <button className=" bg-[#8f0c25] md:mt-14 flex items-center justify-center">
            <a
              href="/car.png"
              download
              className="semi h-12 text-white px-7 flex justify-center items-center"
            >
              TÉLÉCHARGER
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-10 md:pt-0">
          {/* <p className="semi text-sm max-w-80">
            Découvrez toutes les promotions Alfa Romeo!
          </p>
          <button className=" border-[#8f0c25] border-2 bg-white md:mt-14 flex items-center justify-center">
            <a
              href="https://www.alfaromeo.fr/offres"
              className="semi h-12 text-black px-7 flex justify-center items-center"
            >
              VOIR LES PROMOTIONS
            </a>
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Merci;
