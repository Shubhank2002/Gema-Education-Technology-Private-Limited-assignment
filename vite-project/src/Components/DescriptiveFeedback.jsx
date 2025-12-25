import React, { useEffect, useState } from "react";
import { FEEDBACK_MAP } from "./FeedBack_Map";

const getFeedback = (scores, category) => {
  console.log(category);
  if (scores[category] >= 8) {
    return FEEDBACK_MAP[category].excellent;
  } else if (scores[category] >= 6 && scores[category] < 8) {
    return FEEDBACK_MAP[category].good;
  } else {
    return FEEDBACK_MAP[category].poor;
  }
};

const DescriptiveFeedback = ({ scores }) => {
  return (
    <div className="text-black mt-5 mb-12 space-y-8 font-sans">
      <h1 className="border-b border-b-gray-400 pb-5 text-left font-sans sm:text-[26px]">
        Descriptive Feedback
      </h1>
      <div className="space-y-2">
        <h1 className="sm:text-[24px] text-left font-bold">
          Overall{" "}
          <span
            style={{ color: `${scores.overall >= 7 ? "green" : "orange"}` }}
          >
            ({scores.overall})
          </span>
        </h1>
        <p className="text-left text-[16px] sm:text-[18px]">
          {getFeedback(scores, "overall")}
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="sm:text-[24px] text-left font-bold">
          Pronunciation{" "}
          <span
            style={{
              color: `${scores.Pronunciation >= 7 ? "green" : "orange"}`,
            }}
          >
            ({scores.Pronunciation})
          </span>
        </h1>
        <p className="text-left text-[16px] sm:text-[18px]">
          {getFeedback(scores, "Pronunciation")}
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="sm:text-[24px] text-left font-bold">
          Fluency{" "}
          <span
            style={{ color: `${scores.Fluency >= 7 ? "green" : "orange"}` }}
          >
            ({scores.Fluency})
          </span>
        </h1>
        <p className="text-left text-[16px] sm:text-[18px]">
          {getFeedback(scores, "Fluency")}
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="sm:text-[24px] text-left font-bold">
          Vocabulary{" "}
          <span
            style={{ color: `${scores.Vocabulary >= 7 ? "green" : "orange"}` }}
          >
            ({scores.Vocabulary})
          </span>
        </h1>
        <p className="text-left text-[16px] sm:text-[18px]">
          {getFeedback(scores, "Vocabulary")}
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="sm:text-[24px] text-left font-bold">
          Grammar{" "}
          <span
            style={{ color: `${scores.Grammar >= 7 ? "green" : "orange"}` }}
          >
            ({scores.Grammar})
          </span>
        </h1>
        <p className="text-left text-[16px] sm:text-[18px]">
          {getFeedback(scores, "Grammar")}
        </p>
      </div>
    </div>
  );
};

export default DescriptiveFeedback;
