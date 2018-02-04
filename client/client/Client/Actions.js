const API_URL = "http://localhost:3000/clients"

const GET_CLIENTS_REQUEST = 'GET_CLIENTS_REQUEST'
const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
const GET_CLIENTS_FAILURE = 'GET_CLIENTS_FAILURE'

const getClient = () => {
  return function (dispatch) {
    dispatch({
      type: GET_CLIENTS_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_CLIENTS_SUCCESS,
          clients: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_CLIENTS_FAILURE,
          error: error
        })
      })
  }
}

export default getClient