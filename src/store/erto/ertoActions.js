import { apiCall } from "../../services/api";
import {
    FETCH_ERTOS_REQUEST,
    FETCH_ERTOS_SUCCESS,
    FETCH_ERTOS_FAILURE
} from './ertoTypes'

export const fetchErtos = () => {
  return (dispatch) => {
    dispatch(fetchErtosRequest())
    return apiCall('GET', `https://analisi.transparenciacatalunya.cat/resource/6fpi-ycak.json`)
      .then(response => {
        dispatch(fetchErtosSuccess(response))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchErtosFailure(error.message))
      })
  }
}

export const fetchErtosRequest = () => {
  return {
    type: FETCH_ERTOS_REQUEST
  }
}

export const fetchErtosSuccess = ertos => {
  return {
    type: FETCH_ERTOS_SUCCESS,
    payload: ertos
  }
}

export const fetchErtosFailure = error => {
  return {
    type: FETCH_ERTOS_FAILURE,
    payload: error
  }
}
