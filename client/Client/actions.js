// actions

const FETCH_DATA = 'FETCH_DATA';

const fetchData = value => ({
  type: FETCH_DATA,
  value,
});


module.exports = {
  fetchData,
};
