import HomeButton from "./HomeButton";

function Input({ points, totalQuestions }) {
  return (
    <div className="input-box">
      <input readOnly type="range" value={points} max={totalQuestions} />;
      <HomeButton />
    </div>
  );
}

export default Input;
