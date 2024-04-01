import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Intro from './Pages/Intro';
import Subscription from './Pages/Subscription';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='/Subscribe' element={<Subscription/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Welcome' element={<Welcome/>}/>
    
    </Routes>
   </>
  );
}

export default App;
