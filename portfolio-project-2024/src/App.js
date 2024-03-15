import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      {/* particles */}

      {/* navBar */}
    <Navbar/>
      {/* main page */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
 
    </div>
  );
}

export default App;
