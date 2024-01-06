import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Pages/Register';
import Userdashboard from './Pages/Userdashboard';
import Studyroom from './Pages/Studyroom';
import Reserveroom from './Pages/Reserveroom';
import Kids from './Pages/Kids';
import Romance from './Pages/Romance';
import Poetry from './Pages/Poetry';
import Sci from './Pages/Sci';
import BookPage from './Pages/BookPage';
import Bookreservation from './Pages/Bookreservation';
import MakeReservation from './Pages/MakeReservation';
import Stafflogin from './Pages/Stafflogin';



function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/> 
          <Route path='/userdashboard' element={<Userdashboard/>}/> 
          <Route path='/studyroom' element={<Studyroom/>}/> 
          <Route path='/reserveroom' element={<Reserveroom/>}/> 
          <Route path='/kids' element={<Kids/>}/> 
          <Route path='/romance' element={<Romance/>}/> 
          <Route path='/poetry' element={<Poetry/>}/> 
          <Route path='/sci' element={<Sci/>}/> 
          <Route path='/bookpage' element={<BookPage/>}/> 
          <Route path='/bookreservation' element={<Bookreservation/>}/> 
          <Route path='/makereservation' element={<MakeReservation/>}/> 
          <Route path='/stafflogin' element={<Stafflogin/>}/> 
        
         

        </Routes>
    </BrowserRouter>
  );
}

export default App;
