export default function counter(state = INITIAL_STATE, action, idx) {
  switch (action.type) {
    case 'DELETE':
      return state.update('cat', catState => deleteCat(cat, action.catId));
    default:
      return state;
  }
}
