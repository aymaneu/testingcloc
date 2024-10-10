import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useCarStore } from "../../store/brochure/car";
import { useInfoStore } from "../../store/brochure/carInfo";
const Form = () => {
  const { car, updateCar } = useCarStore();
  const [clicked, setClicked] = useState("");
  const {
    civilité,
    prénom,
    nom,
    email,
    tel,
    address,
    callType,
    siren,
    marketing,
    communication,
    profilage,
    done,
    map,
    label,
    ville,
    updateVille,
    updateCivilité,
    updatePrénom,
    updateNom,
    updateEmail,
    updateTel,
    updateAddress,
    updateCallType,
    updateLabel,
    updateSiren,
    updateMarketing,
    updateCommunication,
    updateProfilage,
    updateDone,
    setSec,
    setMap,
  } = useInfoStore();
  // async function onSubmit(event) {
  //   event.preventDefault();
  //   // Set loading to true when the request starts

  //   try {
  //     const formData = new FormData(event.currentTarget);
  //     console.log("hi");
  //     updateDone(true);
  //     console.log(event.currentTarget);
  //     await fetch(
  //       // "https://script.google.com/macros/s/AKfycbwQjZ2n7D7NcoqcpK-emOsNa65pTsU0joo_oT6PYl45zgwaPnQ21lmUlN15bO24p4YPGw/exec",
  //       "https://script.google.com/macros/s/AKfycbyaA5XF4HcydyK57rqbLJnWYf6Yzrxl58N1Io7krnCq-lXu8iSegfvRofuyw6bsLTck/exec",
  //       {
  //         method: "POST",
  //         body: formData,
  //         cache: "no-cache",
  //       }
  //     );

  //     // Handle response if necessary
  //   } catch (error) {
  //     // Handle error if necessary
  //     console.error(error);
  //   } finally {
  //     // setTimeout(() => {
  //     //   router.refresh();
  //     // }, 3000);
  //   }
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Create a FormData object from the form
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        mode: "no-cors",
      });

      if (response.ok || response.type === "opaque") {
        // alert("Form submitted successfully!");
        updateDone(true);
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: car !== "" ? "14%" : "100%",
        opacity: car !== "" ? 1 : 0,
      }}
      className="grid z-40 bg-[#F4F4F4] w-full grid-cols-3 px-10 md:px-20 pb-20 pt-2"
    >
      <div className="col-span-3 md:col-span-1 mb-5 md:mb-0">
        <h2>Votre sélection:</h2>
        <h2 className="semi text-lg">
          {cars.filter((cr) => cr.label === car)[0]?.label}
        </h2>
        <img
          src={cars.filter((cr) => cr.label === car)[0]?.image}
          className="w-80"
          alt="info"
        />
        <button
          onClick={() => updateCar("")}
          className="semi h-12 px-7 border border-black text-black mt-14 flex items-center justify-center"
        >
          CHANGER DE MODÈLE
        </button>
      </div>
      <div className="col-span-3 md:col-span-2">
        <form
          onSubmit={handleSubmit}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&amp;orgId=00D8d000009q2y7"
          method="POST"
        >
          <input type="hidden" name="oid" value="00D8d000009q2y7" />
          <input
            type="hidden"
            name="recordType"
            id="recordType"
            value="0128d000000DtwF"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            value="1"
          />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="83"
          />
          <input
            type="hidden"
            id="00N8d00000UVYPn"
            name="00N8d00000UVYPn"
            value="83-620"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP5"
            name="00N8d00000UVYP5"
            value="Demande de Test Drive"
          />
          <input
            id="lead_source"
            name="lead_source"
            type="hidden"
            value="event_website"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
            <input
              type="text"
              hidden
              id="Model"
              name="Model"
              value={car}
              defaultValue={car}
            />
            <input
              type="text"
              hidden
              id="Mode"
              name="Mode"
              value="Brochure"
              defaultValue="Brochure"
            />
            <input
              name="first_name"
              id="first_name"
              onChange={(e) => updatePrénom(e.target.value)}
              type="text"
              placeholder="PRÉNOM*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="last_name"
              id="last_name"
              type="text"
              onChange={(e) => updateNom(e.target.value)}
              placeholder="NOM*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <div className="flex flex-col">
              <select
                name="salutation"
                id="salutation"
                onChange={(e) => updateCivilité(e.target.value)}
                className="semi bg-[#F4F4F4] border border-black h-12"
              >
                <option className="semi pl-2" value="" hidden>
                  Civilité*
                </option>
                <option className="semi" value="Mr.">
                  M.
                </option>
                <option className="semi" value="MME.">
                  MME.
                </option>
                <option className="semi" value="MLLE.">
                  MLLE.
                </option>
              </select>
            </div>
            <input
              name="ville"
              id="ville"
              onChange={(e) => updateVille(e.target.value)}
              type="text"
              placeholder="VILLE*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="email"
              id="email"
              onChange={(e) => updateEmail(e.target.value)}
              type="email"
              placeholder="E-MAIL*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
          </div>

          <div className="pt-10">
            <div className="pb-5">
              <label className="semi ">CONSENTEMENT</label>
              <p>
                Après avoir lu la
                <a href="" className="underline pl-1 cursor-pointer ">
                  Note d&apos;information*
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  value=""
                  type="radio"
                  onClick={() => updateMarketing(true)}
                  name="A"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="A"
                  onClick={() => updateSiren(false)}
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] uppercase">
                les conditions générales et la politique de confidentialité
              </a>
            </div>
            {/* <div className="pt-3 items-center grid md:grid-cols-3 mb-3">
              <div className="flex items-center">
                <input
                  value=""
                  onClick={() => updateMarketing(true)}
                  type="radio"
                  name="B"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="B"
                  onClick={() => updateMarketing(false)}
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px]">
                LES ACTIVITÉS DE PROFILAGE
              </a>
            </div>
            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  value=""
                  type="radio"
                  name="C"
                  onClick={() => updateProfilage(true)}
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="C"
                  onClick={() => updateProfilage(false)}
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px]">
                LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS ACTIVITÉS
                DE MARKETING
              </a>
            </div> */}
          </div>
          <button
            type="submit"
            name="submit"
            // onClick={() => updateDone(true)}
            className="semi h-12 text-white px-7 bg-[#ba0816] mt-14 flex items-center justify-center"
          >
            ÉTAPE SUIVANTE
            <RiArrowRightSLine size={23} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;

const cars = [
  { image: "/Giulia.png", label: "Giulia" },
  { image: "/Stelvio.png", label: "Stelvio" },
  { image: "/Tonale.png", label: "Tonale" },
  { image: "/Stelvio-Q.png", label: "Stelvio Quadrifoglio" },
  { image: "/Giulia-Q.png", label: "Giulia Quadrifoglio" },
];
