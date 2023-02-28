import Layout from './components/Layout';
import Main from './components/Main';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Main/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
