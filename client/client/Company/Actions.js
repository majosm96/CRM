// imports
import uuid from 'uuid/v1';

const API_URL = "http://localhost:3000/companies"

const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'
const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST'
const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS'
const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE'
const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST';
const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE';

const addCompany = company => (dispatch) => {
  dispatch({
    type: ADD_COMPANY_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uuid(),
      ...company,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_COMPANY_SUCCESS,
        company: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_COMPANY_FAILURE,
        error,
      });
    });
};


const getCompanies = () => {
  return function (dispatch) {
    dispatch({
      type: GET_COMPANIES_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_COMPANIES_SUCCESS,
          companies: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_COMPANIES_FAILURE,
          error: error
        })
      })
  }
}

const deleteCompany = id => (dispatch) => {
  dispatch({
    type: DELETE_COMPANY_REQUEST,
    id,
  });
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_COMPANY_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_COMPANY_FAILURE,
        error,
      });
    });
};

module.exports = {
  addCompany,
  getCompanies,
  deleteCompany,
};