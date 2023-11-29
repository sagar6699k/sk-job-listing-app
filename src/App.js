import { Route, Routes } from 'react-router-dom';
import './App.css';
import JobDashBoard from './components/jobDashboard/JobDashBoard';
import Login from './components/login/Login';
import { PrivateRoute } from './components/route/PrivateRoute';
function App() {
  return (
    <div className="App">
      <h1 className='app_heading'>Job listing App</h1>
      {/* <Login /> */}
      {/* <JobDashBoard /> */}

      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route path='/dashboard' element={<JobDashBoard />} /> */}

        <Route
          path="/private"
          element={<PrivateRoute><JobDashBoard /></PrivateRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
