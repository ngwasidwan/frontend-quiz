import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Options({ answer, index }) {
  const { curAnswers, selectedOption, dispatch } = useContext(MyContext);

  const { correctAnswer } = curAnswers;

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
