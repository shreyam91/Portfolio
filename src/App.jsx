import './App.css'

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Blog  from './components/blog/Blog';

function App() {

  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home/>
      <About/>
      <Work/>
      <Resume/>
      <Blog/>
      <Contact/>
    </main>
    </>
  )
}

export default App
