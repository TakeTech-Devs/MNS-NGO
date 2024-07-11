import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/AdminConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  
    try {
      const response = await axios.post(`/api/v1/admin/login-admin`, { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, error: error.response.data.msg || error.message });
    }
  };


  // Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};