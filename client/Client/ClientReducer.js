// Client reducer

const DEFAULT_STATE = {
  clients: [],
};

const clients = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        clients: action.value,
      };
    default:
      return state;
  }
};

export default clients;
