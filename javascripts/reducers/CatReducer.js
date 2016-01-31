export default function CatReducer(state = INITIAL_STATE, action, idx) {
  switch (action.type) {
    case DELETE:
      return state.filter(cat =>
        cat.id !== action.id
      );
    default:
      return state;
  }
}
