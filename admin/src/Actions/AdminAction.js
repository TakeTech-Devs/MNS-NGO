import { ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, CLEAR_ERRORS, GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/AdminConstants";
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

  export const addAdmin = (name, email, password) => async (dispatch) => {
    dispatch({ type: ADD_ADMIN_REQUEST });
  
    try {
      const response = await axios.post('/api/v1/admin/create-admin', { name, email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      dispatch({ type: ADD_ADMIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_ADMIN_FAIL, error: error.response.data.msg || error.message });
    }
  };

  export const getAdmins = () => async (dispatch) => {
    dispatch({ type: GET_ADMINS_REQUEST });
  
    try {
      const response = await axios.get('/api/v1/admin/get-admins');
      dispatch({ type: GET_ADMINS_SUCCESS, payload: response.data.users });
    } catch (error) {
      dispatch({ type: GET_ADMINS_FAIL, error: error.response.data.msg || error.message });
    }
  };

  // Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};