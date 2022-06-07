// Main class where Routing is done and Website is being Rendered

import './App.css';
import Homepage from './Components/Common Interface/Homepage/Homepage';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect } from 'react'
import Login from './Components/Common Interface/Login/Login';
import Register from './Components/User Interface/Register/Register';
import AdminLogin from './Components/Admin Interface/Admin Login/AdminLogin';
import UserDashboard from './Components/User Interface/User Dashboard/UserDashboard';
import CompletedCourses from './Components/User Interface/User Dashboard/CompletedCourses/CompletedCourses';
import IncompleteCourses from './Components/User Interface/User Dashboard/IncompleteCourses/IncompleteCourses';
import AddUser from './Components/Admin Interface/Admin Functionalities/Add User To Course/AddUser';
import CourseDesc from './Components/Common Interface/Courses/CourseDesc';
import Feedback from './Components/User Interface/View Assessments/Assessment Feedback/Feedback';
import Assessment from './Components/User Interface/View Assessments/Assessment';
import ReactPayPal from './Components/User Interface/PayPal/PayPal';
import Admin from './Components/Admin Interface/Admin Dashboard/Admin';
import AddQuiz from './Components/Admin Interface/Admin Functionalities/Add Assessments/AddQuiz';
import MaterialsPage from './Components/Admin Interface/Admin Dashboard/Materials/MaterialsPage';
import MaterialView from './Components/User Interface/MaterialView/MaterialView';
import AddCourse from './Components/Admin Interface/Admin Functionalities/Add Course/AddCourse';
import ListAll from './Components/Common Interface/List All Courses/ListAll';


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
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/Login' element={<Login/>} /> 
        <Route exact path='/Register' element={<Register/>} />   
        <Route exact path='/AdminLogin' element={<AdminLogin/>} />  
        <Route exact path='/UserDashboard' element={<UserDashboard/>} />
        <Route exact path='/CompletedCourses' element={<CompletedCourses/>} />
        <Route exact path='/IncompleteCourses' element={<IncompleteCourses/>} />
        <Route exact path='/AddUser' element={<AddUser/>} />
        <Route exact path='/CourseDesc' element={<CourseDesc/>} />
        <Route exact path='/Feedback' element={<Feedback/>} />
        <Route exact path='/Assessment' element={<Assessment/>} />
        <Route exact path='/PayPal' element={<ReactPayPal/>} />
        <Route exact path='/Admin' element={<Admin/>} />
        <Route exact path='/AddQuiz' element={<AddQuiz/>} />
        <Route exact path='/Materials' element={<MaterialsPage/>} />
        <Route exact path='/MaterialView' element={<MaterialView/>} />
        <Route exact path='/AddCourse' element={<AddCourse/>} />
        <Route exact path='/ListAll' element={<ListAll/>} />
      </Routes>
    </Wrapper>
  </Router>   
  );
}

export default App;
