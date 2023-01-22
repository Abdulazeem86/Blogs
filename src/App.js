import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Addpost from './Components/Addpost';
import Viewallpost from './Components/Viewallpost';
import Viewmypost from './Components/Viewmypost';
import Viewmyprofile from './Components/Viewmyprofile';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Signin/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/addpost' exact element={<Addpost/>}/>
      <Route path='/Viewallpost' exact element={<Viewallpost/>}/>
      <Route path='/Viewmypost' exact element={<Viewmypost/>}/>
      <Route path='/Viewmyprofile' exact element={<Viewmyprofile/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
