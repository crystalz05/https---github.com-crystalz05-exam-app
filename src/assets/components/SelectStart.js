import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createExam } from "./api/ApiClient";

function SelectStart() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");

  const [selectedButton, setSelectedButton] = useState(null);

  const getOptionBackgroundColor = (option) => {
    return selectedButton === option
      ? "bg-white shadow-xl text-3xl duration-200 "
      : "";
  };

  const changeFontSize = (option) => {
    return selectedButton === option ? "text-4xl duration-200" : "";
  };

  const subjects = {
    computer: "computer",
    anime: "anime",
    graphic: "graphic",
  };

  const selectButton = async (option, subject1) => {
    document.getElementById(option).checked = true;
    setSelectedButton(option);
    setSubject(subject1);

    const token = sessionStorage.getItem("token");

    try {
      const response = await createExam(subject1);
      console.log(response.data);
      navigate(`/test/${subject1}`, {
        state: { examTitle: subject1, examId: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto bg-white w-full lg:h-full h-[80vh] bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden font-secondary px-0">
      <div className="w-full h-full flex flex-col items-center lg:justify-center lg:py-8">
        <div className="">
          <h1 className="text-center lg:py-[150px] lg:text-5xl text-3xl py-[90px]">
            Select Subject
          </h1>
        </div>
        <div className="w-full pb-8 overflow-y-auto">
          <fieldset className="w-full h-full flex items-center justify-center lg:gap-12  gap-8 px-4">
            <a>
              <div
                onClick={() => selectButton("option1", subjects.computer)}
                className={`flex items-center text-3xl justify-center border-2 border-solid border-gray-500/20 lg:w-[300px] overflow-hidden min-w-[200px] lg:h-[300px] h-[200px] hover:bg-gradient-to-r from-blue-500/10 to-green-300/20 drop-shadow-md cursor-pointer rounded-3xl ${getOptionBackgroundColor(
                  "option1"
                )}`}
              >
                <input id="option1" type="radio" name="subject" hidden />
                <h1
                  id="option1"
                  className={`${changeFontSize("option1")} duration-200`}
                >
                  {subjects.computer}
                </h1>
              </div>
            </a>
            <a>
              <div
                onClick={() => selectButton("option2", subjects.anime)}
                className={`flex items-center text-3xl justify-center border-2 border-solid border-gray-500/20 lg:w-[300px] overflow-hidden min-w-[200px] lg:h-[300px] h-[200px]  hover:bg-gradient-to-r from-blue-500/10 to-green-300/20 drop-shadow-md cursor-pointer rounded-3xl  ${getOptionBackgroundColor(
                  "option2"
                )}`}
              >
                <input id="option2" type="radio" name="subject" hidden />
                <h1
                  id="option2"
                  className={`${changeFontSize("option2")} duration-200`}
                >
                  {subjects.anime}
                </h1>
              </div>
            </a>
            <a>
              <div
                onClick={() => selectButton("option3", subjects.graphic)}
                className={`flex items-center text-3xl justify-center border-2 border-solid border-gray-500/20 lg:w-[300px] overflow-hidden min-w-[200px] lg:h-[300px] h-[200px]  hover:bg-gradient-to-r from-blue-500/10 to-green-300/20 drop-shadow-md cursor-pointer rounded-3xl  ${getOptionBackgroundColor(
                  "option3"
                )}`}
              >
                <input id="option3" type="radio" name="subject" hidden />
                <h1
                  id="option3"
                  className={`${changeFontSize("option3")} duration-200`}
                >
                  {subjects.graphic}
                </h1>
              </div>
            </a>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default SelectStart;
