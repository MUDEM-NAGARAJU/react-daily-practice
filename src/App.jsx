
import './App.css'

import Header from './Components/Header.jsx';
import Profile from './Components/Profile.jsx';
import Skills from './Components/Skills.jsx';
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <div id="app">
    <Header />
    <div className='mid'>
    <Profile />,
    <Skills />
    </div>
    <Footer />
    </div>
  );
  
  
}

export default App;
