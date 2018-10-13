const initialState = {
  color: {
    accent: 'purple',
    primary: 'white'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SETTING_COLOR_PRIMARY':
      return {
        ...state,
        color: {
          ...state.color,
          primary: action.payload.color
        }
      };

    default:
      return state;

  }
};
