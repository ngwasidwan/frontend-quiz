import { useEffect, useReducer, useContext } from "react";
import { IoLogoCss3 } from "react-icons/io5";

import Loader from "./Loader";

import QuestionSection from "./QuestionSection";
import PointsScored from "./PointsScored";
import MainComponent from "./MainComponent";

import { initialData, reducer } from "./reducerData";
import { MyContext } from "./MyContext";

function Css() {
  const [
    { questionData, loading, questionNumber, selectedOption, points, reStart },
    dispatch,
  ] = useReducer(reducer, initialData);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/css");
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

export default Css;

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
            <IoLogoCss3 className="icon-2" />
            Css
          </p>
        </QuestionSection>
      )}

      <MainComponent />
    </>
  );
}
//types of state

//we can classify state in terms of state accessibility (local or global state) and in terms of state domain (remote state and UI state)

//Remote state is application data that is loaded from an api
//we get remote state in an asynchronous way
// data might need refetching + updating
// remote state in large scale apps needs to be createRoutesFromChildren, revalidated etc
//we can place our remote state inside 3rd party libraries like redux, react query,etc

// UI state is everything else ie theme, list filters, form data etc
//UI state is synchronous and stored in the application

// NB: context API is used to manage UI state and not remote state

//We can store state in the url

//We can store state in the users browser ie local storage, session storage etc

// in small apps, to store remote state we use fetch +useEffect + useState/useReducer

// in big apps, we treat all remote state as global remote state. we use context API + useState/useReducer
// we use external libraries like redux, react query,swr,rtk query etc
