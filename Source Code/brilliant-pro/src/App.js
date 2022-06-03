import './App.css';
import Homepage from './Components/Common Interface/Homepage/Homepage';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Navbar from './Components/Common Interface/Navbar/Navbar';
import {useLayoutEffect } from 'react'

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
        </Routes>
      </Wrapper>
    </Router>   
  );
}

export default App;