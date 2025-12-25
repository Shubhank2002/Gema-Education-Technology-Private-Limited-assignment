import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Languages, ThumbsUp, Home, Mail } from "lucide-react";
import OverallScoreCard from "./Components/OverallScoreCard";
import ScoresSummary from "./Components/ScoresSummary";
import DescriptiveFeedback from "./Components/DescriptiveFeedback";

function App() {
  const [loading, setloading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, seterror] = useState("");

  useEffect(() => {
    const url = "http://localhost:8000/api/reports";

    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setApiData(data);
        seterror("");
      } catch (error) {
        seterror(error.message || "something went wrong");
      } finally {
        setloading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) {
    return (
      <h1 className="text-black text-center mt-20 text-xl">
        Loading report...
      </h1>
    );
  }

  if (error) {
    return <h1 className="text-red-500 text-center mt-20 text-xl">{error}</h1>;
  }

  if (!apiData) return null;

  return (
    <>
      <div className="hidden sm:flex z-50 shadow-md min-h-screen bg-white flex-col gap-3 rounded-2xl px-6 py-2 w-[60vw]">
        <nav className="flex  text-gray-600 relative border-b border-b-gray-300 sm:py-8 font-sans sm:mt-3 items-center">
          <p className="sm:text-[26px] absolute text-black sm:left-1/5">
            Student Assessment Report Page
          </p>
          <ul className="flex gap-2 absolute right-5 text-blue-500 font-bold">
            <li className="">
              <Languages size={28} />
            </li>
            <li>
              <ThumbsUp size={28} />
            </li>
            <li>
              <Home size={28} />
            </li>
            <li>
              <Mail size={28} />
            </li>
          </ul>
        </nav>
        <OverallScoreCard data={apiData} />
        <ScoresSummary scores={apiData?.score} />
        <DescriptiveFeedback scores={apiData?.score} />
      </div>
      <div className="sm:hidden flex flex-col gap-8 text-black font-sans w-[90vw] ">
        <nav className="flex flex-col gap-4 border-b border-gray-500 py-3">
          <h1 className="text-[22px]"> Student Assessment Report Page</h1>
          <ul className="flex gap-2 justify-center text-blue-500 font-bold">
            <li className="">
              <Languages size={22} />
            </li>
            <li>
              <ThumbsUp size={22} />
            </li>
            <li>
              <Home size={22} />
            </li>
            <li>
              <Mail size={22} />
            </li>
          </ul>
        </nav>
        <OverallScoreCard data={apiData} />
        <ScoresSummary scores={apiData.score} />
        <DescriptiveFeedback scores={apiData.score} />
      </div>
    </>
  );
}

export default App;
