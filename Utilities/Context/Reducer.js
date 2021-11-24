function Reducer(state, action) {
  switch (action.type) {
    case 'TOKEN':
      return {...state, access_token: action.token};
    default:
      return state;
  }
}

export default Reducer;
