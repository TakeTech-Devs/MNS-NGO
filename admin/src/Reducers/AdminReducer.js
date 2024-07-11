import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/AdminConstants";

export const authReducer = (state = {} , action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };