export default function Options({
  answer,
  index,
  selectedOption,
  dispatch,
  correctAnswer,
}) {
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
