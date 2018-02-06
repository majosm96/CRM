const DEFAULT_STATE = {
  loading: false,
  clients: [],
  error: ''
}

const clients = (state = DEFAULT_STATE, action) => {
  switch (action.type){
    case 'GET_CLIENTS_REQUEST':
    return {
      ...state,
      loading: true
    };
    case 'GET_CLIENTS_SUCCESS':
    return {
      ...state,
      loading: false,
      clients: action.clients
    };
    case 'GET_CLIENTS_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.error
    };
    case 'ADD_CLIENT_REQUEST':
    return {
      ...state,
      loading: true
    };
    case 'ADD_CLIENT_SUCCESS':
      return {
        ...state,
        loading: false,
        clients: [...state.clients, action.client],
    };
    case 'ADD_CLIENT_FAILURE':
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