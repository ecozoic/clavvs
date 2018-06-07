import React from 'react';
import { Provider } from 'mobx-react';
import 'firebase/auth';

import AdminStore from '../../store/admin';
import Authenticate from '../../components/admin/Authenticate';

const store = new AdminStore();

const Admin = () => (
  <Provider adminStore={store}>
    <Authenticate />
  </Provider>
);

export default Admin;
