import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiClient } from "./api/ApiClient";
import { deleteExamById } from "./api/ApiClient";

function Completed({ selectedAnswers }) {
  const location = useLocation();
  const { finalScore, examId } = location.state || {};

  console.log(finalScore);

  let percentage = (finalScore / 20) * 100;

  const score = percentage;

  let total = 20;

  return (
    <div className="container mx-auto bg-white w-full h-screen bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden">
      <div className="lg:flex w-full h-full items-center">
        <div className="flex-1 h-full w-full flex items-center justify-center cursor-pointer">
          <div className="min-h-[600px] min-w-[600px] rounded-[40px] lg:shadow-2xl text-xl flex items-center justify-center">
            <div className="flex flex-col text-center w-full h-[600px] items-center justify-between py-8">
              <div>
                <h1 className="font-bold text-3xl">Test Report</h1>
              </div>
              <div className="h-[250px] w-[250px] flex items-center justify-center">
                <CircularProgressbar
                  value={score}
                  text={`${score}%`}
                  styles={buildStyles({
                    pathColor: `#4CAF50`,
                    textColor: "#000",
                    trailColor: "#fff",
                  })}
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center lg:justify-between w-full px-8"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center flex flex-col items-center">
          <div className="text-[100px] font-secondary w-[500px] text-center">
            {score > 50 ? (
              <h1 className="text-blue-600">
                {" "}
                Hurray!!!<br></br> You did well
              </h1>
            ) : (
              <h1 className="lg:text-red-600">Sorry, You Failed</h1>
            )}
          </div>
          <div className="text-xl">
            <a href={`/select-test`}>Return to Test Selection</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
