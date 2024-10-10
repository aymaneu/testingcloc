import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useCarStore } from "../../store/essai/car";
import { cityInfo } from "../../data/address";
import { cn } from "../../utils/cn";
import { useInfoStore } from "../../store/essai/carInfo";
import { mapStore } from "../../store/essai/map";
const Form = () => {
  const { car, updateCar } = useCarStore();
  const [query, setQuery] = useState("");
  const { mapClicked } = mapStore();
  const { updateMapClicked } = mapStore();
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
    finition,
    updateFinition,
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
    updateCityId,
    cityId,
    setMap,
  } = useInfoStore();
  console.log(address);
  const fixedData = cityInfo.flatMap((items) => items.sections);
  const filteredPeople =
    query === ""
      ? []
      : fixedData.filter((person) => {
          return person.address.toLowerCase().includes(query.toLowerCase());
        });
  console.log(car);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;

  //   // Create a FormData object from the form
  //   const formData = new FormData(form);

  //   try {
  //     const response = await fetch(form.action, {
  //       method: form.method,
  //       body: formData,
  //       mode: "no-cors",
  //     });

  //     if (response.ok || response.type === "opaque") {
  //       // alert("Form submitted successfully!");
  //       updateDone(true);
  //     } else {
  //       alert("Form submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Form submission failed.");
  //   }
  // };

  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: car !== "" ? "10%" : "100%",
        opacity: car !== "" ? 1 : 0,
      }}
      className="grid bg-[#F4F4F4] w-full grid-cols-3 px-10 md:px-20 py-28 md:py-20"
    >
      <div className="col-span-3 md:col-span-1 mb-5 md:mb-0">
        <h2>Votre sélection:</h2>
        <h2 className="semi text-lg">
          {cars.filter((cr) => cr.value === car)[0]?.label}
        </h2>
        <img
          src={cars.filter((cr) => cr.value === car)[0]?.image}
          className="w-80"
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
          // onSubmit={handleSubmit}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000009q2y7"
          method="POST"
        >
          <input
            type="hidden"
            name="retURL"
            value={`https://testingcloc.vercel.app/?cityId=${cityId}&type=essai`}
          />
          <input type="hidden" name="oid" value="00D8d000009q2y7" />
          {/* <input type="hidden" name="debug" value="1" /> */}
          {/* <input
            type="hidden"
            name="debugEmail"
            value="ayoub.markhouss@gmail.com"
          /> */}
          <input
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            type="hidden"
            value="1"
          />
          <input
            id="lead_source"
            name="lead_source"
            type="hidden"
            value="event_website"
          />
          <input type="hidden" name="recordType" value="0128d000000DtwF" />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="83"
            title="Marque d&#39;intérêt"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP5"
            name="00N8d00000UVYP5"
            value="Demande de Test Drive"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
            <input
              type="text"
              hidden
              id="00N8d00000UVYPn"
              name="00N8d00000UVYPn"
              value={car}
              defaultValue={car}
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
              onChange={(e) => updateNom(e.target.value)}
              type="text"
              placeholder="NOM*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <div className="flex flex-col">
              <select
                name="salutation"
                id="salutation"
                onChange={(e) => updateCivilité(e.target.value)}
                className="semi bg-[#F4F4F4] border border-black h-12 pl-3"
              >
                <option className="semi " value="" hidden>
                  CIVILITÉ*
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
              name="city"
              id="city"
              onChange={(e) => updateVille(e.target.value)}
              type="text"
              placeholder="VILLE"
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
            <input
              name="mobile"
              id="mobile"
              onChange={(e) => updateTel(e.target.value)}
              type="tel"
              placeholder="TELEPHONE*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <div className="relative w-full border">
              <input
                name="Adresse"
                id="Adresse"
                onClick={() => setClicked(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  updateAddress(e.target.value);
                }}
                type="text"
                value={query}
                placeholder="CODE POSTAL*"
                className="semi bg-[#F4F4F4] w-full border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              {clicked && query !== "" && (
                <div
                  className={cn(
                    "z-50 absolute divide-y w-full bg-white",
                    filteredPeople.length > 0 && clicked
                      ? "border-2 border-black"
                      : ""
                  )}
                >
                  {filteredPeople.map((file) => {
                    return (
                      <p
                        onClick={() => {
                          setQuery(file.address);
                          updateCityId(file.id);
                          setClicked(false);
                          updateAddress(file.address);
                          setSec(file.sec);
                          setMap(file.map);
                          updateLabel(file.label);
                        }}
                        key={file.label}
                        className="semi text-xs text-start cursor-pointer pl-2 py-4 line-clamp-1 bg-[#F4F4F4]"
                      >
                        {file.address}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <select
              name="Moyenne"
              id="Moyenne"
              onChange={(e) => updateCallType(e.target.value)}
              className="semi bg-[#F4F4F4] border border-black h-12 pl-3"
            >
              <option hidden className="pl-2" value="">
                MOYEN DE CONTACT SOUHAITÉ
              </option>
              <option className="semi" value="Telephone">
                TÉLÉPHONE
              </option>
              <option className="semi" value="Appel video">
                APPÉL VIDEO
              </option>
            </select>

            {car === "Tonale Diesel" ? (
              <div className="flex flex-col">
                <select
                  name="Finition"
                  id="Finition"
                  onChange={(e) => updateFinition(e.target.value)}
                  className="semi bg-[#F4F4F4] border border-black h-12 pl-3"
                >
                  <option className="semi pl-2" value="" hidden>
                    FINITION*
                  </option>
                  <option className="semi" value="Giulia">
                    EDIZIONE SPECIALE
                  </option>
                  <option className="semi" value="Tonale">
                    SPRINT
                  </option>
                  <option className="semi" value="Stelvio">
                    TRIBUTO ITALIANO
                  </option>
                </select>
              </div>
            ) : car === "83-630" ? (
              <div className="flex flex-col">
                <select
                  name="Finition"
                  id="Finition"
                  onChange={(e) => updateFinition(e.target.value)}
                  className="semi bg-[#F4F4F4] border border-black h-12 pl-3"
                >
                  <option className="semi pl-2" value="" hidden>
                    FINITION*
                  </option>
                  <option className="semi" value="Giulia">
                    SPRINT
                  </option>
                  <option className="semi" value="Tonale">
                    VELOCE
                  </option>
                  <option className="semi" value="Stelvio">
                    COMPETIZIONE
                  </option>
                </select>
              </div>
            ) : car === "83-620" ? (
              <div className="flex flex-col">
                <select
                  name="Finition"
                  id="Finition"
                  onChange={(e) => updateFinition(e.target.value)}
                  className="semi bg-[#F4F4F4] border border-black h-12 pl-3"
                >
                  <option className="semi pl-2" value="" hidden>
                    FINITION*
                  </option>
                  <option className="semi" value="Giulia">
                    SPRINT
                  </option>
                  <option className="semi" value="Tonale">
                    VELOCE
                  </option>
                  <option className="semi" value="Stelvio">
                    COMPETIZIONE
                  </option>
                </select>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="pt-10">
            <label className="semi text-sm">
              ÊTES-VOUS PARTICULIER OU PROFESSIONNEL ?
            </label>
            <div className="flex flex-col md:flex-row pt-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateSiren(true)}
                  value="particulier"
                  type="radio"
                  name="Siren"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">PARTICULIER</label>
              </div>
              <div className="flex items-center md:pl-20">
                <input
                  onClick={() => updateSiren(false)}
                  type="radio"
                  name="Siren"
                  value="PROFESSIONNEL"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">PROFESSIONNEL</label>
              </div>
            </div>
            <p className="italic text-sm pt-10">
              * Tous les champs sont obligatoires
            </p>
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
                  onClick={() => updateMarketing(true)}
                  value=""
                  type="radio"
                  name="x"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  onClick={() => updateMarketing(false)}
                  type="radio"
                  name="x"
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
                  onClick={() => updateProfilage(true)}
                  value=""
                  type="radio"
                  name="B"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  onClick={() => updateProfilage(false)}
                  type="radio"
                  name="B"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] ">
                LES ACTIVITÉS DE PROFILAGE
              </a>
            </div>
            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateCommunication(true)}
                  value=""
                  type="radio"
                  name="C"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={() => updateCommunication(false)}
                  type="radio"
                  name="C"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] ">
                LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS ACTIVITÉS
                DE MARKETING
              </a>
            </div> */}
          </div>
          <button
            type="submit"
            name="submit"
            // onClick={() => }
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
