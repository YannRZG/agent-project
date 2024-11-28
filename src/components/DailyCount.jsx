import Flex from "../../public/assets/Flex.png";
import Vector from "../../public/assets/Vector.png";
import Vector2 from "../../public/assets/Vector2.png";
import Token4 from "../../public/assets/token4.png";
export default function DailyCount() {
    return (
      <div className="flex border-2 border-yellow-400 rounded-lg h-full">
        {/* Div contenant la date */}
        <div className="bg-yellow-400 flex flex-col justify-center items-center ">
          <p className="text-dark text-xl font-bold px-4">21/11/2024</p>
        </div>
  
        {/* Div contenant les statistiques */}
        <div className="flex items-center justify-around flex-grow text-white py-4">
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">MATCHES PLAYED</p>
            <p className="text-white text-xl font-semibold">3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Flex} alt="token" className="w-10 h-10 mr-2" />
            <p className="">TOTAL FEE</p>
            <p className="text-red-500 text-xl">100</p>
            <p className="text-red-500 text-sm">$4,44</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Vector} alt="token" className="w-6 h-10 mr-2" />
            <p className="">ENERGY USED</p>
            <p className="text-red-500 text-xl">15</p>
            <p className="text-red-500 text-sm">$11,10</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Token4} alt="token" className="w-10 h-10 mr-2" />
            <p>TOTAL $BFT</p>
            <p className="text-green-500 text-xl">72</p>
            <p className="text-green-500 text-sm">$7,20</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Flex} alt="token" className="w-10 h-10 mr-2" />
            <p className="">TOTAL FLEX</p>
            <p className="text-green-500 text-xl">60</p>
            <p className="text-green-500 text-sm">$4,44</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Vector2} alt="token" className="w-8 h-10 mr-2" />
            <p>PROFIT</p>
            <p className="text-green-500 text-2xl">$19,20</p>
          </div>
        </div>
      </div>
    );
  }
  