import { useEffect, useReducer, useContext } from "react";

import { IoLogoReact } from "react-icons/io5";
import Loader from "./Loader";

import QuestionSection from "./QuestionSection";
import PointsScored from "./PointsScored";
import MainComponent from "./MainComponent";

import { initialData, reducer } from "./reducerData";
import { MyContext } from "./MyContext";

function ReactPage() {
  const [
    { questionData, loading, questionNumber, selectedOption, points, reStart },
    dispatch,
  ] = useReducer(reducer, initialData);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/react");
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

export default ReactPage;

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
            <IoLogoReact className="icon-4" />
            React
          </p>
        </QuestionSection>
      )}

      <MainComponent />
    </>
  );
}
