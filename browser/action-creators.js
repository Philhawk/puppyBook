

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    receivePuppies: puppies,
  };
};

export const SELECT_PUPPY = 'SELECT_PUPPY';

const selectPuppy = function (puppy) {
  return {
    type: SELECT_PUPPY,
    selectPuppy: puppy,
  };
};

export const getPuppiesById = function (puppyId) {
  const thunk = function (dispatch) {
    fetch(`/api/puppies/${puppyId}`)
      .then(res => res.json())
      .then((puppy) => {
        const receivePuppyAction = selectPuppy(puppy);
        dispatch(receivePuppyAction);
      });
  };

  return thunk;
};

export const loadPuppies = function () {
  return function (dispatch) {
    fetch('/api/puppies')
    .then((res) => {
      return res.json();
    })
    .then((puppies) => {
      const action = receivePuppies(puppies);
      dispatch(action);
    })
    .catch((err) => {
      console.error(err);
    });
  };
};
