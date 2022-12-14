import {
  PATIENTS_UPDATE_REQUEST,
  PATIENTS_UPDATE_SUCCESS,
  PATIENTS_UPDATE_FAIL,
    PATIENTS_DELETE_REQUEST,
    PATIENTS_DELETE_SUCCESS,
    PATIENTS_DELETE_FAIL,
    PATIENTS_CREATE_FAIL,
    PATIENTS_CREATE_SUCCESS,
    PATIENTS_CREATE_REQUEST,
    PATIENTS_LIST_REQUEST,
    PATIENTS_LIST_SUCCESS,
    PATIENTS_LIST_FAIL,
  } from "../constants/patientsConstants";
  
  export const patientsListReducer = (state = { patients: [] }, action) => {
    switch (action.type) {
      case PATIENTS_LIST_REQUEST:
        return { loading: true };
      case PATIENTS_LIST_SUCCESS:
        return { loading: false, patients: action.payload };
      case PATIENTS_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  

  export const patientsCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PATIENTS_CREATE_REQUEST:
        return { loading: true };
      case PATIENTS_CREATE_SUCCESS:
        return { loading: false, success: true };
      case PATIENTS_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
};
  

export const patientsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENTS_UPDATE_REQUEST:
      return { loading: true };
    case PATIENTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PATIENTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const patientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENTS_DELETE_REQUEST:
      return { loading: true };
    case PATIENTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PATIENTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};