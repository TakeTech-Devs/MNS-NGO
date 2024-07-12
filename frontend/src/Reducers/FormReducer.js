import { CLEAR_ERRORS, SUBMIT_FORM_FAIL, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS } from "../Constants/FormConstants";

export const touchFormReducer = (state = {}, action) => {
    switch (action.type) {
      case SUBMIT_FORM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SUBMIT_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case SUBMIT_FORM_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  