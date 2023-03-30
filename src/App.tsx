import Navbar from './components/Navbar'
import Grids from './components/Grid'
import Container from '@mui/material/Container';
import PopupColumn from './components/PopupColumn';
import PopupEditCard from './components/PopupEditCard';
import Login from './pages/login';
import Register from './pages/register';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Container> 
      <Navbar/>
    <Router>
      <Routes>
        <Route path="/" Component={Grids}/>
        <Route path="/" Component={PopupColumn}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
    </Container>
  )
}



export default App