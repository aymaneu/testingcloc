import "./App.css";
import { useStatusStore } from "./store/status";
import { cn } from "./utils/cn";
import Essai from "./components/essai";
import Brochure from "./components/brochure";
import Devis from "./components/devis";
import Models from "./components/essai/Models";
import Form from "./components/essai/Form";
import Map from "./components/essai/map";
import Merci from "./components/essai/Merci";

function App() {
  const searchParams = window.location.search;
  const isDevis = searchParams.includes("devis");
  const { updateStatus, status } = useStatusStore();
  return (
    <div className="relative bg-[#F4F4F4]">
      <div className="flex justify-center max-w-xl mx-auto py-10">
        {statusInfo.map((hi) => (
          <button
            onClick={() => updateStatus(hi.label)}
            key={hi}
            className={cn(
              "semi py-2 w-full cursor-pointer",
              isDevis
                ? "Devis" === hi.label
                  ? "semi text-white bg-[#292B35] border-[#8f0c25] border-2"
                  : ""
                : status === hi.label
                ? "semi text-white bg-[#292B35] border-[#8f0c25] border-2 "
                : ""
            )}
          >
            {hi.label}
          </button>
        ))}
      </div>
      {statusInfo
        .filter((hillo) => hillo.label === status)
        .map((it) => {
          return (
            <div>
              <it.comp />
            </div>
          );
        })}
    </div>
  );
}

export default App;

const statusInfo = [
  { label: "Essai", comp: Essai },
  { label: "Devis", comp: Devis },
  // { label: "Brochure", comp: Brochure },
];
