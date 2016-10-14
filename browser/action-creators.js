

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    puppies
  };
};

export const loadPuppies = function () {
  return function (dispatch) {
    fetch('/api/puppies')
    .then(function (res) {
      return res.json();
    })
    .then(function (puppies) {
      const action = receivePuppies(puppies);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};
