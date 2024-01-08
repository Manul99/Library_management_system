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
import BookDetails from './Pages/BookDetails';
import Bookform from './Pages/Bookform';
import Staffprofile from './Pages/Staffprofile';
import Staffdetails from './Pages/Staffdetails';
import AdminListaffdetail from './Pages/AdminListaffdetail';
import Staffform from './Pages/Staffform';
import AdminDashboard from './Pages/AdminDashboard';
import Studyroomres from './Pages/Studyroomres';
import Bookborrowings from './Pages/Bookborrowings';
import Librarianbookdetails from './Pages/Librarianbookdetails';
import Detailsmember from './Pages/Detailsmember';
import Feedback from './Pages/Feedback';





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
          <Route path='/bookdetails' element={<BookDetails/>}/>
          <Route path='/bookform' element={<Bookform/>}/>
          <Route path = '/staffprofile' element={<Staffprofile/>}/>
          <Route path = '/staffdetails' element={<Staffdetails/>}/>
          <Route path = '/adminListaffdetail' element={<AdminListaffdetail/>}/>
          <Route path = '/staffform' element={<Staffform/>}/>
          <Route path = '/admindashboard' element={<AdminDashboard/>}/>
          <Route path = '/studyroomres' element={<Studyroomres/>}/>
          <Route path = '/bookborrowing' element={<Bookborrowings/>}/>
          <Route path = '/librarianbookdetails' element={<Librarianbookdetails/>}/>
          <Route path = '/detailsmember' element={<Detailsmember/>}/>
          <Route path = '/feedback' element={<Feedback/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
