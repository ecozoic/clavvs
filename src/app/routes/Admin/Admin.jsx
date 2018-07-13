import React from 'react';
import 'firebase/auth';

// TODO: init admin reducers/epics since we are code-split

import Authenticate from '../../components/Authenticate';

const Admin = () => <Authenticate />;

export default Admin;
