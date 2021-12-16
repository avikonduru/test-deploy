import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// css
import './App.css';

// Utils
import Routes from './utils/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// antd
import { Layout } from 'antd';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
