import { observable, action } from 'mobx';

class AuthStore {
  @observable auth = { user: null, error: null };

  @action('set user')
  setUser(newUser) {
    this.auth.user = newUser;
  }

  getUser() {
    return this.auth.user;
  }

  @action('set error')
  setError(newError) {
    this.auth.error = newError;
  }

  getError() {
    return this.auth.error;
  }

  @action('logout')
  logout() {
    this.auth.user = null;
  }
}

export default AuthStore;
