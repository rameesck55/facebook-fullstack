import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './Register';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Login />}  />
      <Route path={'/register'} element={<Register />}  />
      <Route path={'/home'} element={<Home />}  />
      <Route path={'/profile'} element={<Profile />}  />


    </Routes>
    </BrowserRouter>
    
     
  );
}

export default App;
