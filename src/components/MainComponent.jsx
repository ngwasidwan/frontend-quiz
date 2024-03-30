import Button from "./Button";
import Options from "./Options";
// import { MyContext } from "./myContext";
import { MyContext } from "./MyContext";
import { useContext } from "react";

export default function MainComponent() {
  const { totalQuestions, questionNumber, curAnswers } = useContext(MyContext);

  const { answers } = curAnswers;

  // const totalQuestions = questionData.length;
  const completed = questionNumber + 1 === totalQuestions;

  return (
    <ul>
      {answers.map((answer, i) => (
        <Options answer={answer} index={i} key={i} />
      ))}

      {questionNumber + 1 < totalQuestions && (
        <Button type="nextQuestion" value={1}>
          Submit answer
        </Button>
      )}
      {completed && <Button type="completed">Restart Quiz</Button>}
    </ul>
  );
}
