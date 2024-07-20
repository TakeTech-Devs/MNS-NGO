import { ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, CLEAR_ERRORS, GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS, LOAD_ADMIN_FAIL, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS } from "../Constants/AdminConstants";
import axios from "axios";
import baseUrl from '../helper';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    };

    const { data } = await axios.post(`${baseUrl}/api/v1/admin/login-admin`, { email, password }, config);

    console.log('Token from login response:', data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
    });
  }
};


export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_ADMIN_REQUEST });

    const config = {
      withCredentials: true
    };

    const { data } = await axios.get(`${baseUrl}/api/v1/admin/profile`, config);

    dispatch({
      type: LOAD_ADMIN_SUCCESS,
      payload: data.user
    });

  } catch (error) {
    dispatch({
      type: LOAD_ADMIN_FAIL,
      payload: error.response.data.message
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true
    };

      await axios.get(`${baseUrl}/api/v1/admin/logout`, config);

      dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const addAdmin = (name, email, password) => async (dispatch) => {
  dispatch({ type: ADD_ADMIN_REQUEST });

  try {
    const response = await axios.post(`${baseUrl}/api/v1/admin/create-admin`, { name, email, password }, {
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
    const response = await axios.get(`${baseUrl}/api/v1/admin/get-admins`);
    dispatch({ type: GET_ADMINS_SUCCESS, payload: response.data.users });
  } catch (error) {
    dispatch({ type: GET_ADMINS_FAIL, error: error.response.data.msg || error.message });
  }
};

// Clearing Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};