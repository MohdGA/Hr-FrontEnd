import { Route, Routes, useNavigate } from "react-router-dom";
import HrList from "./components/HRLIST/HrList";
import Navbar from "./components/NavBar/NavBar";
import Landing from './components/Landing/landing'
import * as hrService from '../services/hrService'
import { useEffect, useState } from "react";
import HrDetails from "./components/HrDetails/hrDetails";
import HrForm from "./components/HrForm/hrForm";
import SignUp from "./components/SignUp/Sign-up";
import * as authService from '../services/authService';
import SignIn from "./components/SignIn/Sign-in";
import LeaveForm from './components/LeaveForm/LeaveForm';
import PerformanceForm from "./components/PerformanceForm/PerformanceForm";
import * as leaveService from '../services/leaveService';
import * as performanceService from '../services/performanceService';
import Profile from "./components/Profile/Profile";


const App = () => {

  const userState = authService.getUser();

  const [hr, setHr] = useState([]);
  const [user,setUser] = useState(userState);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchAllHrs = async () => {
      const hrData = await hrService.index();

      setHr(hrData);
    };
    fetchAllHrs()
  }, []);


  const handleAddLeave = async (formData, employeeId) => {
        const newLeave = await leaveService.create(formData, employeeId);
        setHr((prevHr) => 
          prevHr.map((employee) => 
            employee.id === parseInt(employeeId)
            ? {...employee, leaves: [...employee.leaves, newLeave]}
            : employee
          )
        );

    };

 const handleAddPerformance = async (formData, employeeId) => {
    const newPerformance = await performanceService.create(formData, employeeId);

    setHr((prevHr) => 
      prevHr.map((employee) =>
        employee.id === parseInt(employeeId)
        ? {...employee, performance: [...employee.performance, newPerformance]}
         : employee 
      )
    );
};

  const handleAddEmployee = async (formData) => {
    const newEmployee = await hrService.create(formData);
    setHr([newEmployee, ...hr]);
    navigate('/employees')
  };

  const handleSignUp = async (formData) => {
    try{
      const res = await authService.signup(formData);
      return {success: true}
    } catch(error){
      return {success: false, message: error.message}
    }
  };

  const handleSignIn = async (formData) => {
    const res = await authService.signin(formData);
    setUser(res)
   
  }

  const handleSignOut = async () => {
    try{
      localStorage.removeItem('token');
      setUser(null)
      navigate('/')
    } catch(error){
      console.log(error)
    }
  }

  const handleDeleteHr = async (hrId) => {
    console.log('hr id', hrId)
    const deletedHr  = await hrService.deleteHr(hrId);
    setHr(hr.filter((hr) => hr.id !== hrId));
    navigate('/employees')
  };

  const handleUpdateHr = async (hrId, hrFormData) => {
    const updatedHr = await hrService.update(hrId, hrFormData);
    setHr(hr.map((hr) => (hrId === hr.id ? updatedHr : hr)))
    navigate(`/employees/${hrId}`)
  }
  
  

  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/employees" element={<HrList hr={hr} user={user} />} />
        <Route path="/employees/:employeeId" element={<HrDetails user={user} handleDeleteHr={handleDeleteHr} />}/>
        <Route path="/employees/new" element={<HrForm handleAddEmployee={handleAddEmployee} />}/>
        <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} />}/>
        <Route path='/sign-in' element={<SignIn handleSignIn={handleSignIn} user={user} />}/>
        <Route path="/employees/:employeeId/edit" element={<HrForm handleUpdateHr={handleUpdateHr} />} />
        <Route path="/employees/:employeeId/newLeave" element={<LeaveForm handleAddLeave={handleAddLeave} />}/>
        <Route path="/employees/:employeeId/newPerformance" element={<PerformanceForm handleAddPerformance={handleAddPerformance} />}/>
        <Route path="/Profile" element={<Profile user={user} hr={hr} />} />
      </Routes>
    </>
  )
}

export default App;