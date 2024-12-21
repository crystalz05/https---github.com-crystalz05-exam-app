import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import TestStartConfirmation from "./TestStartConfirmation";
import { useAuth } from "./security/AuthContext";
import { createSubmission, retriveExamById } from "./api/ApiClient";

function Test() {
  const [usedQuestion, setUsedQuestion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({}); // State to hold selected options as { questionId: selectedOption }

  const params = useParams();
  const location = useLocation();
  const { examId } = location.state || {};

  const retrieveExam = async () => {
    const response = await retriveExamById(examId);
    setUsedQuestion(response.data.questions);
    const initialSelections = response.data.questions.reduce(
      (acc, question) => {
        acc[question.id] = null; // Initialize selections with null for each question
        return acc;
      },
      {}
    );
    setSelectedOptions(initialSelections);
  };

  // console.log(selectedOptions);
  useEffect(() => {
    retrieveExam();
  }, []);

  const [showPopUp, setShowPopUp] = useState(false);
  const submitButton = () => setShowPopUp(true);
  const closeModal = () => setShowPopUp(false);
  const navigate = useNavigate();
  const [startTest, setStartTest] = useState(null);
  const handleChildData = (messag) => {
    setStartTest(messag);
    retrieveExam();
  };

  const [timeLeft, setTimeLeft] = useState(3000); // Initial time in seconds (5 minutes)

  useEffect(() => {
    if (startTest) {
      const interval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft((prevTime) => prevTime - 1);
        } else {
          navigate("/completed");
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTest, timeLeft]);

  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const hours = Math.floor(timeLeft / 3600);
  const authContext = useAuth();

  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const nextQuestion = () => {
    if (currentQuestionId < usedQuestion.length - 1) {
      setCurrentQuestionId(currentQuestionId + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionId > 0) {
      setCurrentQuestionId(currentQuestionId - 1);
    }
  };

  const handleOptionChange = (e, questionId) => {
    const selectedOption = e.target.value;

    // Update selectedOptions with the selected answer for the specific questionId
    setSelectedOptions((prevSelections) => ({
      ...prevSelections,
      [questionId]: selectedOption,
    }));
  };

  const [submissionList, setSubmissionList] = useState([]);

  const handlingSubmit = async () => {
    const answerList = Object.keys(selectedOptions).map((key) => ({
      id: key,
      answer: selectedOptions[key],
    }));

    setSubmissionList(answerList);
    const response = await createSubmission(
      authContext.userId,
      examId,
      answerList
    );

    console.log(response.data);

    navigate(`/completed`, {
      state: { finalScore: response.data, examId: examId },
    });
  };

  useEffect(() => {
    console.log(submissionList);
  }, [submissionList]);

  const headerTopic = () => {
    const subjects = {
      computer: "Computer Test",
      anime: "Anime Test",
      graphic: "Graphic Test",
    };
    return subjects[params.subject] || null;
  };

  // method to show the indicator at the side of the exam
  const changeIndicator = (id) => {
    return id === currentQuestionId ? "bg-blue-600 text-white" : "bg-black/20";
  };

  return (
    <div className="container mx-auto bg-white w-full lg:h-full h-full bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden font-secondary px-0">
      <div className="flex w-full relative">
        <div
          className={`absolute text-center bg-white/30 w-full h-full backdrop-blur-sm flex justify-center items-center ${
            startTest ? "hidden" : ""
          }`}
        >
          <TestStartConfirmation message={handleChildData} />
        </div>
        <div className="lg:w-[70%] w-full shadow-xl">
          <div className="bg-gray-300 h-[70px] overflow-hidden flex justify-center items-center">
            <h1 className="font-third text-[20px] text-center">
              :: {headerTopic()} ::
            </h1>
          </div>
          <div className="lg:h-[700px] px-9 pb-12">
            <div className="block lg:hidden justify-center">
              <div>
                <h1 className="border-b font-primary text-[20px] pb-2 pt-8 font-bold text-center">
                  Time left
                </h1>
              </div>
              <div id="timer" className="text-2xl border-b">
                <div className="grid grid-cols-3 px-[30px]">
                  <div className="text-center">
                    <h1>{`${hours < 10 ? `0${hours}` : hours}`}</h1>
                    <h1 className="text-[10px]">Hours</h1>
                  </div>
                  <div className="text-center">
                    <h1>{`${minutes < 10 ? `0${minutes}` : minutes}`}</h1>
                    <h1 className="text-[10px]">Minutes</h1>
                  </div>
                  <div className="text-center">
                    <h1>{`${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
                    <h1 className="text-[10px]">Seconds</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="border-b font-primary text-[20px] pb-1 pt-8 font-bold">
                {`Question ${currentQuestionId + 1}`}
              </h1>
              <p className="pb-3 h-[150px] pt-3 font-third lg:text-[25px] overflow-hidden">
                {startTest !== null && usedQuestion[currentQuestionId]?.text}
              </p>
              <fieldset className="font-primary font-semibold">
                {startTest !== null &&
                  usedQuestion[currentQuestionId]?.options.map(
                    (option, index) => (
                      <div key={index} className="lg:h-auto overflow-hidden">
                        <div className="lg:mb-4 h-[60px] flex items-center">
                          <div
                            className={`cursor-pointer flex items-center h-[30px] lg:h-[50px] p-4 rounded-full  hover:bg-blue-300 lg:w-[50px]`}
                          >
                            <input
                              id={`option-${index + 1}`}
                              name={`question-${currentQuestionId}`}
                              type="radio"
                              className="radio-button"
                              value={option}
                              onChange={(e) =>
                                handleOptionChange(
                                  e,
                                  usedQuestion[currentQuestionId].id
                                )
                              }
                              checked={
                                selectedOptions[
                                  usedQuestion[currentQuestionId].id
                                ] === option
                              } // Check if this option is selected
                            />
                            <label
                              htmlFor={`option-${index + 1}`}
                              className="cursor-pointer mx-auto custom-radio"
                            >
                              {String.fromCharCode(65 + index)}
                            </label>
                            <br />
                          </div>
                          <div
                            id="modifying"
                            className="lg:text-xl text-lg leading-5 ml-5"
                          >
                            {option}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </fieldset>
            </div>
          </div>
          <div className="h-[100px] bg-gray-300 px-9 pt-5">
            <div className="flex justify-between">
              <div>
                <button
                  onClick={prevQuestion}
                  className="bg-blue-600 text-white rounded-l-full lg:w-[100px] w-[60px] h-[40px]"
                >
                  Prev
                </button>
                <button
                  onClick={nextQuestion}
                  className="ml-3 bg-blue-600 text-white rounded-r-full lg:w-[100px] w-[60px] h-[40px]"
                >
                  Next
                </button>
              </div>
              <div>
                <button
                  onClick={submitButton}
                  className="bg-green-700 text-white rounded-full w-[120px] h-[40px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block h-full w-[30%] bg-white hidden md:block">
          <div className="bg-gray-300 h-[70px] overflow-hidden flex justify-center items-center"></div>
          <div className=" h-[250px] px-9 justify-center">
            <div>
              <h1 className="border-b font-primary text-[20px] pb-8 pt-8 font-bold text-center">
                Time left
              </h1>
            </div>
            <div id="timer" className="text-4xl">
              <div className="grid grid-cols-3">
                <div className="text-center">
                  <h1>{`${hours < 10 ? `0${hours}` : hours}`}</h1>
                  <h1 className="text-[20px]">Hours</h1>
                </div>
                <div className="text-center">
                  <h1>{`${minutes < 10 ? `0${minutes}` : minutes}`}</h1>
                  <h1 className="text-[20px]">Minutes</h1>
                </div>
                <div className="text-center">
                  <h1>{`${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
                  <h1 className="text-[20px]">Seconds</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="grid grid-cols-6 gap-4 p-8 cursor-pointer">
                {usedQuestion.map((item, index) => (
                  <div key={item.id}>
                    <div
                      className={`${changeIndicator(
                        index
                      )} rounded-tl-2xl w-[40px] h-[40px] flex justify-center items-center `}
                      onClick={() => setCurrentQuestionId(index)} // Optional: allow clicking on the indicator to jump to that question
                    >
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showPopUp && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg font-semibold mb-4">
                Are you ready to submit
              </p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 mr-4"
                >
                  Cancel
                </button>
                <button
                  // onClick={() => navigate("/completed")}
                  onClick={handlingSubmit}
                  className="bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
