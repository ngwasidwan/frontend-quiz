import { useEffect, useReducer } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import Loader from "./Loader";

const initialData = {
  questionData: [],
  loading: true,
  questionNumber: 0,
  selectedOption: null,
  points: 0,
  reStart: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, questionData: action.payload, loading: false };

    case "selected":
      return {
        ...state,
        selectedOption: action.payload.elIndex,
        points: state.points + action.payload.curPoint,
      };

    case "nextQuestion":
      return {
        ...state,
        questionNumber: action.payload + state.questionNumber,
        selectedOption: null,
      };

    case "completed":
      return { ...initialData, reStart: true };

    default:
      return state;
  }
}

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
  const { question, answers, correctAnswer } = questionData.at(questionNumber);

  const totalQuestions = questionData.length;
  const completed = questionNumber + 1 === totalQuestions;

  return (
    <>
      {completed && selectedOption !== null ? (
        <h1 className="score">
          {`${
            points === totalQuestions
              ? "Excellent! You had all correct 🍕"
              : `You scored ${points}/${totalQuestions}`
          }`}
        </h1>
      ) : (
        <div>
          <p className="logo">
            <IoLogoJavascript className="icon-3" />
            Html
          </p>

          <em className="question-num">
            question {`${questionNumber + 1}/${totalQuestions}`}
          </em>
          <p className="question">{question} </p>

          <input readOnly type="range" value={points} max={totalQuestions} />
        </div>
      )}

      <ul>
        {answers.map((answer, i) => (
          <Options
            answer={answer}
            index={i}
            key={i}
            dispatch={dispatch}
            selectedOption={selectedOption}
            correctAnswer={correctAnswer}
          />
        ))}

        {questionNumber + 1 < totalQuestions && (
          <button
            className={`btn ${selectedOption === null && "disable"}`}
            disabled={selectedOption === null}
            onClick={() => dispatch({ type: "nextQuestion", payload: 1 })}
          >
            submit answer
          </button>
        )}
        {completed && (
          <button
            className={`btn ${selectedOption === null && "disable"}`}
            disabled={selectedOption === null}
            onClick={() => dispatch({ type: "completed" })}
          >
            restart quiz
          </button>
        )}
      </ul>
    </>
  );
}

function Options({ answer, index, selectedOption, dispatch, correctAnswer }) {
  const disable = selectedOption !== null;

  const activeEl = selectedOption === index;

  return (
    <button
      disabled={disable}
      className={`answers ${disable && "disable"}
      ${disable && index === correctAnswer && "selected"}

       ${activeEl && "selected "} 
       ${activeEl && selectedOption !== correctAnswer && "wrong"} `}
      onClick={() =>
        dispatch({
          type: "selected",
          payload: {
            elIndex: index,
            curPoint: index === correctAnswer ? 1 : 0,
          },
        })
      }
    >
      <span className="letter">{answer.letter.toUpperCase()}</span>
      {answer.option}
    </button>
  );
}
