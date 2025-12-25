import React from "react";

const ScoresSummary = ({ scores }) => {
  if (!scores) return <h1 className="text-black">scores not found</h1>;
  return (
    <div className="my-5 space-y-6 text-black py-5">
      <h1 className="text-left  font-sans sm:text-[26px] border-b pb-5 border-b-black">
        Summary of scores
      </h1>
      <div className="flex justify-center gap-16 items-center">
        <div className="flex flex-col">
          <div className="w-50 text-white">
            <div className="w-full bg-blue-400 rounded-t-lg py-2 sm:text-[20px]">
              speechace
            </div>
            <div className="w-full bg-green-400 rounded-b-[100px] h-35 font-bold flex items-center justify-center text-[42px]">
              <h1 className="relative bottom-4 ">{scores.overall}/9</h1>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="text-gray-600 space-y-2 w-[35vw]">
            <div className="flex justify-between">
              <h2 className="text-left">Pronunciation</h2>
              <span>{scores.Pronunciation}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className=" h-2 rounded-lg bg-green-400"
                style={{ width: `${(scores.Pronunciation / 9) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-gray-600 space-y-2 w-[35vw]">
            <div className="flex justify-between">
              <h2 className="text-left">Fluency</h2>
              <span>{scores.Fluency}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className=" h-2 rounded-lg bg-green-400"
                style={{ width: `${(scores.Fluency / 9) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-gray-600 space-y-2 w-[35vw]">
            <div className="flex justify-between">
              <h2 className="text-left">Vocabulary</h2>
              <span>{scores.Vocabulary}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className=" h-2 rounded-lg bg-orange-400 "
                style={{ width: `${(scores.Vocabulary / 9) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-gray-600 space-y-2 w-[35vw]">
            <div className="flex justify-between">
              <h2 className="text-left">Grammar</h2>
              <span>{scores.Grammar}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className=" h-2 rounded-lg bg-orange-400"
                style={{ width: `${(scores.Grammar / 9) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoresSummary;
