function SubmitButton({
  children,
  selectedOption,
  dispatch,
  type,
  value = null,
}) {
  const noSelection = selectedOption === null;
  return (
    <button
      className={`btn ${noSelection && "disable"}`}
      disabled={noSelection}
      onClick={() =>
        dispatch(value ? { type: type, payload: value } : { type: type })
      }
    >
      {children}
    </button>
  );
}

export default SubmitButton;
