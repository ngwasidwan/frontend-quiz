export const initialData = {
  questionData: [],
  loading: true,
  questionNumber: 0,
  selectedOption: null,
  points: 0,
  reStart: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        questionData: action.payload,
        loading: false,
        reStart: false,
      };

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
