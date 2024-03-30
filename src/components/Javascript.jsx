import { useEffect, useReducer, useContext } from "react";

import { IoLogoJavascript } from "react-icons/io5";
import Loader from "./Loader";

import QuestionSection from "./QuestionSection";
import PointsScored from "./PointsScored";
import MainComponent from "./MainComponent";

import { initialData, reducer } from "./reducerData";
import { MyContext } from "./MyContext";

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
        <MyContext.Provider
          value={{
            questionData,
            questionNumber,
            selectedOption,
            points,
            dispatch,
            totalQuestions: questionData.length,
            curQuestion: questionData.at(questionNumber),
            curAnswers: questionData.at(questionNumber),
          }}
        >
          <Questions />
        </MyContext.Provider>
      )}
    </div>
  );
}

export default Javascript;

function Questions() {
  const { totalQuestions, questionNumber, selectedOption } =
    useContext(MyContext);

  const completed = questionNumber + 1 === totalQuestions;

  return (
    <>
      {completed && selectedOption !== null ? (
        <PointsScored />
      ) : (
        <QuestionSection>
          <p className="logo">
            <IoLogoJavascript className="icon-3" />
            Javascript
          </p>
        </QuestionSection>
      )}

      <MainComponent />
    </>
  );
}
