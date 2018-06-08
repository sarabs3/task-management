export default (state = { login: false }, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return { ...state, login: true };
      break;
    default:
      return state;
      break;
  }
};
