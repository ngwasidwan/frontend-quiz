import Input from "./Input";
function QuestionSection({
  children,
  question,
  points,
  totalQuestions,
  questionNumber,
}) {
  return (
    <div>
      {children}

      <em className="question-num">
        question {`${questionNumber + 1}/${totalQuestions}`}
      </em>
      <p className="question">{question} </p>

      <Input points={points} totalQuestions={totalQuestions} />
    </div>
  );
}

export default QuestionSection;
