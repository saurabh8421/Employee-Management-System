import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AddEmployee from './components/AddEmployee'
import Footer from './components/Footer';
import Header from './components/Header';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <Router>
      <Header/>
      <div className="min-h-screen text-white bg-slate-100">
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/" element={<AdminHome/>} />
          <Route path="/dashboard/addemp" element={<AddEmployee/>} />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

