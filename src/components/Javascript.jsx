import { useEffect, useReducer } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import Loader from "./Loader";

import QuestionSection from "./QuestionSection";
import PointsScored from "./PointsScored";
import MainComponent from "./MainComponent";

import { initialData, reducer } from "./reducerData";

function Javascript() {
  const [
    { questionData, loading, questionNumber, selectedOption, points, reStart },
    dispatch,
  ] = useReducer(reducer, initialData);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/javascript");
        const data = await res.json();
        dispatch({ type: "start", payload: data });
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [reStart]);

  return (
    <div className="questions-container">
      {loading && <Loader />}
      {!loading && (
        <Questions
          questionData={questionData}
          questionNumber={questionNumber}
          selectedOption={selectedOption}
          dispatch={dispatch}
          points={points}
        />
      )}
    </div>
  );
}

export default Javascript;

function Questions({
  questionData,
  questionNumber,
  selectedOption,
  dispatch,
  points,
}) {
  const { question } = questionData.at(questionNumber);

  const totalQuestions = questionData.length;
  const completed = questionNumber + 1 === totalQuestions;

  return (
    <>
      {completed && selectedOption !== null ? (
        <PointsScored points={points} totalQuestions={totalQuestions} />
      ) : (
        <QuestionSection
          question={question}
          points={points}
          totalQuestions={totalQuestions}
          questionNumber={questionNumber}
        >
          <p className="logo">
            <IoLogoJavascript className="icon-4" />
            Javascript
          </p>
        </QuestionSection>
      )}

      <MainComponent
        questionData={questionData}
        questionNumber={questionNumber}
        selectedOption={selectedOption}
        dispatch={dispatch}
        points={points}
      />
    </>
  );
}
