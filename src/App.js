
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/layouts/Header';
import Login from './components/pages/Login';

import Register from './components/pages/Register';
import ProfilePicture from './components/pages/ProfilePicture';
import About from './components/pages/About';
import Account from './components/pages/Account';
import Contactus from './components/pages/Contactus';
import BookingCenter from './components/pages/BookingCenter';
import CheckLogin from './components/pages/CheckLogin';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
       
        <Routes>
            <Route exact path='/' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/check-login' element={<CheckLogin/>}/>
            <Route exact path='/profile-picture' element={<ProfilePicture/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/account' element={<Account/>}/>
            <Route exact path='/booking-center' element={<BookingCenter/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contactus' element={<Contactus/>}/>
        </Routes>
    </Router>
  );
}

export default App;
