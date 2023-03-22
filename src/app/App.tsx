import { FunctionComponent } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import RoutingManager from '@app/routing-manager';
import 'primeicons/primeicons.css';
import 'react-toastify/dist/ReactToastify.css';
import './_app.scss';

const App: FunctionComponent = () => {
  return (
    <Router>
      <RoutingManager />
    </Router>
  );
};

export default App;
