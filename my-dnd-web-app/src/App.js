import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dieroller from './pages/Dieroller/Dieroller';
import Characters from './pages/Characters/Characters';
import Library from './pages/Library/Library';


function App() {
  return (  

    <div className="App">
      <header className="App-header">        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Dieroller" element={<Dieroller />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Library" element={<Library />} />
          </Routes>
        </Router>  
      </header>
    </div>
  );
}

export default App;
