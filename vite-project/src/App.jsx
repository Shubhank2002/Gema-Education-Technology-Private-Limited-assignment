import { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css";
import { Languages,ThumbsUp,Home ,Mail} from "lucide-react";
import OverallScoreCard from "./Components/OverallScoreCard";
import ScoresSummary from "./Components/ScoresSummary";
import DescriptiveFeedback from "./Components/DescriptiveFeedback";

function App() {

  const [apiData, setApiData] = useState(null)
  useEffect(()=>{
    const url='http://localhost:8000/api/reports'
    const fetchDetails=async()=>{
      try {
        const {data}=await axios.get(url)
        console.log(data)
        setApiData(data)
      } catch (error) {
        
      }
      
      
    }

    fetchDetails()
  },[])
  return (
    <>
      <div className="z-50 shadow-md min-h-screen bg-white flex flex-col gap-3 rounded-2xl px-6 py-2 w-[60vw]">
        <nav className="flex  text-gray-600 relative border-b border-b-gray-300 py-8 font-sans mt-3 items-center">
          <p className="text-[26px] absolute text-black left-1/5">Speechace Speaking Tests Report</p>
          <ul className="flex gap-2 absolute right-5 text-blue-500 font-bold">
            <li className="">
              <Languages size={28} />
            </li>
            <li><ThumbsUp size={28} /></li>
            <li><Home size={28} /></li>
            <li><Mail size={28} /></li>
          </ul>
        </nav>
        <OverallScoreCard data={apiData}/>
        <ScoresSummary/>
        <DescriptiveFeedback/>
      </div>
    </>
  );
}

export default App;
