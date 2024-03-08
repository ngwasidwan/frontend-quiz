import SubmitButton from "./SubmitButton";
import Options from "./Options";

export default function MainComponent({
  questionData,
  questionNumber,
  selectedOption,
  dispatch,
}) {
  const { answers, correctAnswer } = questionData.at(questionNumber);

  const totalQuestions = questionData.length;
  const completed = questionNumber + 1 === totalQuestions;

  return (
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
        <SubmitButton
          selectedOption={selectedOption}
          dispatch={dispatch}
          type="nextQuestion"
          value={1}
        >
          Submit answer
        </SubmitButton>
      )}
      {completed && (
        <SubmitButton
          selectedOption={selectedOption}
          dispatch={dispatch}
          type="completed"
        >
          Restart Quiz
        </SubmitButton>
      )}
    </ul>
  );
}
