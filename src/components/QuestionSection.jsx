import Input from "./Input";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function QuestionSection({ children }) {
  const { curQuestion, points, totalQuestions, questionNumber } =
    useContext(MyContext);

  return (
    <div>
      {children}

      <em className="question-num">
        question {`${questionNumber + 1}/${totalQuestions}`}
      </em>
      <p className="question">{curQuestion.question} </p>

      <Input points={points} totalQuestions={totalQuestions} />
    </div>
  );
}

export default QuestionSection;
