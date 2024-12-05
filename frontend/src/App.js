import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './Screens/Home';
import Posts from './Screens/Posts';
import Projects from './Screens/Projects';
import Blog from './Screens/Blog';
import Contact from './Screens/Contact';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/> }/>
        <Route path='/projects' element={<Projects/> }/>
        <Route path='/blog/:blogId' element={<Blog/> }/>
        <Route path='/contact' element={<Contact/> }/>
      </Routes>
    </Router>
  );
}

export default App;
