import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './Pages/Registrasi'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/daftar" element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
