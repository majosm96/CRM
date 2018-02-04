const DEFAULT_STATE = {
  loading: false,
  clients: [],
  error: ''
}

const clients = (state = DEFAULT_STATE, action) => {
  switch (action.type){
    case 'GET_COMPANIES_REQUEST':
    return {
      ...state,
      loading: true
    };
    case 'GET_COMPANIES_SUCCESS':
    return {
      ...state,
      loading: false,
      companies: action.companies
    };
    case 'GET_COMPANIES_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.error
    };
    default:
      return state
  }
}

export default clients