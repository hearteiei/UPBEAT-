import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Gameplay from './pages/Gameplay'
import Member from './pages/Member'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <NavLink end to="/">Home</NavLink>
        <NavLink to="/gameplay">Start</NavLink>
        <NavLink to="/member">Member</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gameplay" element={<Gameplay />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
