import {} from '../types';

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
