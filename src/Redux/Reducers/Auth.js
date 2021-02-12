import * as Type from "../Actions/Types";

const initialState = {
  isLoggedin: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGGEDIN_SUCCESS:
      return { ...state, isLoggedin: true, error: null };

    case Type.LOGGEDIN_FAILURE:
      return {
        ...state,
        isLoggedin: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
