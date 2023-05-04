import Navbar from './components/Navbar'
import Grids from './components/Grid'
import Swagger from './components/SwaggerUI'
import Container from '@mui/material/Container';
import PopupColumn from './components/PopupColumn';
import Login from './pages/login';
import Register from './pages/register';
import HomePage from './pages/homepage';
import Profile from './pages/profile';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div> 
      <Navbar/>
      <Container>
    <Router>
      <Routes>
        <Route path="/Dashboard" Component={Grids}/>
        <Route path="/Dashboard" Component={PopupColumn}/>
        <Route path="/swagger" Component={Swagger}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/" Component={HomePage} />
        <Route path="/Profile" Component={Profile} />
      </Routes>
    </Router>
    </Container>
    </div>
  )
}



export default App