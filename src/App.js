import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
  <Hero></Hero>
  <Navbar></Navbar>
  <About></About>
<Project></Project>
<Contact></Contact>
<Footer></Footer>
   </>
  );
}

export default App;
