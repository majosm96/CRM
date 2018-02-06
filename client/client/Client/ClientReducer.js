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
    case 'DELETE_CLIENT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_CLIENT_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: state.clients.filter((item) => {
          return item.id !== action.id;
        }),
      };
    case 'DELETE_CLIENT_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state
  }
}

export default clients