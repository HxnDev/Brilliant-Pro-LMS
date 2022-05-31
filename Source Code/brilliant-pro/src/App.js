import './App.css';
import Homepage from './Components/Common Interface/Homepage/Homepage';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Homepage />
    </Router>   
  );
}

export default App;
