export const LOGIN = 'clavvs/auth/LOGIN';
export const LOGOUT = 'clavvs/auth/LOGOUT';
export const AUTH_ERROR = 'clavvs/auth/ERROR';

export const login = user => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const authError = error => ({
  type: AUTH_ERROR,
  error: true,
  payload: error,
});
