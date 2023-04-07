import Navbar from './components/Navbar'
import Grids from './components/Grid'
import Swagger from './components/SwaggerUI'
import Container from '@mui/material/Container';
import PopupColumn from './components/PopupColumn';
import Login from './pages/login';
import Register from './pages/register';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div> 
      <Navbar/>
      <Container>
    <Router>
      <Routes>
        <Route path="/" Component={Grids}/>
        <Route path="/swagger" Component={Swagger}/>
        <Route path="/" Component={PopupColumn}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
    </Container>
    </div>
  )
}



export default App