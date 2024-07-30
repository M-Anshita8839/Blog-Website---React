import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Pages/Food';
import Travel from './Pages/Travel';
import Sports from './Pages/Sports';
import Technology from './Pages/Technology';
import Home from './Pages/Home';
import Politics from './Pages/Politics';
import Footer from './Components/Footer';
import Donut from './Pages/Description/Food-desc/Donut-desc';
import Cakedescription from './Pages/Description/Cake-desc';
import India from './Pages/Description/Travel-desc/India';
import Samosadesc from './Pages/Description/Food-desc/Samosadesc';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Food' element={<Food />}></Route>
          <Route path='/Travel' element={<Travel />}></Route>
          <Route path='/Sports' element={<Sports />}></Route>
          <Route path='/Politics' element={<Politics />}></Route>
          <Route path='/Technology' element={<Technology />}></Route>
          <Route path='/donut-detail' element={<Donut />}></Route>
          <Route path='/cake-detail' element={<Cakedescription/>}></Route>
          <Route path='/samosa-detail'element={<Samosadesc/>}></Route>
          <Route path='/india' element={<India/>}></Route>
          
        
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
