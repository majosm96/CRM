const API_URL = "http://localhost:3000/companies"

const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'

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

export default getCompanies;