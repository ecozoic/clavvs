export const LOGIN = 'clavvs/auth/LOGIN';
export const LOGOUT = 'clavvs/auth/LOGOUT';
export const ERROR = 'clavvs/auth/ERROR';

export const login = user => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const error = err => ({
  type: ERROR,
  error: true,
  payload: err,
});
