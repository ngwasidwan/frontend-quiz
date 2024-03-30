import { useContext } from "react";
// import { HtmlContext } from "./Html";
import { MyContext } from "./MyContext";

function Button({ children, type, value = null }) {
  const { dispatch, selectedOption } = useContext(MyContext);

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

export default Button;
