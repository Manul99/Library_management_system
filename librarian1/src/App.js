

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SRRD from './Components1/SRRD';
import BD from './Components3/BD';
import BBD from './Components2/BBD';




function App() {
  return (
     
   
    
 <BrowserRouter>
 
 <Routes>


<Route exact path="/" element={<BD/>}></Route>
<Route path="/bbd" element={<BBD/>}></Route>
<Route path="/srrd" element={<SRRD/>}></Route>



 </Routes>
 
 </BrowserRouter>


   
 
    
  );
}

export default App;



