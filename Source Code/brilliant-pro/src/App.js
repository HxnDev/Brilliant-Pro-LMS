import './App.css';
import Homepage from './Components/Common Interface/Homepage/Homepage';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Navbar from './Components/Common Interface/Homepage/Navbar/Navbar';
import {useLayoutEffect } from 'react'
import Login from './Components/Common Interface/Login/Login';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/Login' element={<Login/>} />   
        </Routes>
      </Wrapper>
    </Router>   
  );
}

export default App;
