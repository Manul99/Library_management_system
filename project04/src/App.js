
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feedback from './Feedback';
import Staff from './Staff';
import Book from './Book';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/feedback' element={<Feedback/>}/>
      <Route path='/staff' element={<Staff/>}/>
      <Route path='/book' element={<Book/>}/>
    </Routes>
    </BrowserRouter>
  );
};

