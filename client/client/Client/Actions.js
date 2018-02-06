// imports
import uuid from 'uuid/v1';

const API_URL = "http://localhost:3000/clients"

const GET_CLIENTS_REQUEST = 'GET_CLIENTS_REQUEST'
const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
const GET_CLIENTS_FAILURE = 'GET_CLIENTS_FAILURE'
const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST'
const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS'
const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE'
const DELETE_CLIENT_REQUEST = 'DELETE_CLIENT_REQUEST';
const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
const DELETE_CLIENT_FAILURE = 'DELETE_CLIENT_FAILURE';

const addClient = contact => (dispatch) => {
  dispatch({
    type: ADD_CLIENT_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uuid(),
      ...contact,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_CLIENT_SUCCESS,
        client: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_CLIENT_FAILURE,
        error,
      });
    });
};

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

const deleteClient = id => (dispatch) => {
  dispatch({
    type: DELETE_CLIENT_REQUEST,
    id,
  });
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_CLIENT_FAILURE,
        error,
      });
    });
};

module.exports = {
  addClient,
  getClient,
  deleteClient,
};