import ProgressBar from "./ProgressBar";
import {
  FaChevronRight,
  FaCalendarCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Contract from "/assets/contract.png";
import Logo from "/assets/Logo.png";
import Tokens from "/assets/Tokens.png";
import BackgroundUser from "/assets/background_user.png";
import A from "/assets/A.png";
import itemsImage from "/assets/Items.png";
import '../App.css';

export default function MainGrid() {
  const navigate = useNavigate();
  const progress = 75; // Exemple de progression à 75 %

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 px-8 min-h-[60vh]">
        {/* MY COLLECTION Card (Visible sur tous les écrans) */}
        <div className="bg-zinc-800 rounded-lg text-white flex h-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <button
  className="flex items-end h-full w-full p-4 rounded-lg shadow-md bg-image"
  onClick={() => navigate("/collection")}
>
  <div className="flex flex-row">
    {/* Afficher l'image contract.png uniquement sur tablette et mobile */}
    <div className="flex items-center lg:hidden">
      <img src={Contract} alt="Contract" style={{ height: "58px" }} />
    </div>
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-300 text-start">
        MY COLLECTION
      </h1>
      <p className="text-sm text-start font-light">
        SHOWRUNNERS CONTRACTS / BADGES / IN-GAME BUILDS
      </p>
    </div>
  </div>
</button>

        </div>

        {/* CALCULATORS Card (Visible uniquement sur grand écran) */}
        <div className="flex flex-col h-full space-y-4 hidden lg:flex">
          <button
            onClick={() => navigate("/calculator")}
            className="flex items-end p-4 rounded-lg shadow-md text-white basis-2/3 bg-contain bg-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/assets/background-preseason.png')",
            }}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-300 text-start">
                CALCULATORS
              </h1>
              <div className="flex items-center gap-2">
                <img src={Logo} alt="" style={{ height: "10px" }} />
                <p className="text-sm text-start font-light ">
                  SIMULATE YOUR NEED
                </p>
              </div>
            </div>
          </button>

          {/* FARMING Card (Visible uniquement sur grand écran) */}
          <button
            onClick={() => navigate("/farming")}
            className="bg-zinc-900 p-4 rounded-lg shadow-md text-white basis-1/3 bg-center bg-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/assets/custom-league.png')", // Chemin mis à jour
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative">
              <img
                src={Tokens}
                alt=""
                className="ml-auto"
                style={{ height: "100px", width: "auto" }}
              />
              <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-300 text-start">
                FARMING
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-sm text-start font-light">
                  OPTIMIZE YOUR TIME ACCORDING TO YOUR PROFILE
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* DAILY and MONTHLY Cards (Visible sur tous les écrans) */}
        <div className="space-y-4 flex flex-col h-full">
          <button
            onClick={() => navigate("/profile")}
            className="flex items-end h-1/6 p-2 rounded-lg shadow-md bg-zinc-800 text-white transform hover:scale-105 transition-transform duration-300 ease-in-out hidden lg:flex"
          >
            {/* Omiage Card (Visible uniquement sur grand écran) */}
            <div className="flex space-x-2">
              <div className="flex items-center">
                <img
                  src={BackgroundUser}
                  alt=""
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div>
                <h1 className="text-start text-lg font-semibold">Omiage</h1>
                <div className="flex flex-row items-center space-x-3">
                  <p className="text-xs text-start font-extralight">LVL 9</p>
                  <ProgressBar progress={progress} />
                  <p className="text-xs text-start font-extralight text-yellow-300">
                    LVL 10
                  </p>
                </div>
                <p className="text-xs text-start font-extralight text-yellow-300">
                  Complete data to increase your level and participate in BFT
                  Raffle NFT!
                </p>
              </div>
              <div className="flex items-center">
                <FaChevronRight className="text-2xl py-auto" />
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/daily")}
            className="flex items-end flex-1 p-4 rounded-lg bg-zinc-800 shadow-md text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/assets/rewards-pattern1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-row space-x-4">
              <div className="flex items-center">
                <FaCalendarCheck className="text-5xl py-auto text-zinc-500" />
              </div>
              <div className="flex flex-col justify-end">
                <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-300 text-start">
                  DAILY
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-start font-light">
                    COMPLETE YOUR DAILY DATA
                  </p>
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/monthly")}
            className="flex items-end flex-1 p-4 rounded-lg bg-zinc-800 shadow-md text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/assets/rewards-pattern2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-row space-x-4">
              <div className="flex items-center">
                <FaRegCalendarAlt className="text-5xl py-auto text-zinc-500" />
              </div>
              <div className="flex flex-col justify-end">
                <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-300 text-start">
                  MONTHLY
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-start font-light">ACCOUNTING</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center mt-6 opacity-70">
        <img src={A} alt="" style={{ height: "100px", width: "auto" }} />
      </div>
    </>
  );
}
