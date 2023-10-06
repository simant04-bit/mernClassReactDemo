import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'

function App() {

  return (

    <BrowserRouter>

    <Routes>

    <Route path='/' element={<Home/>} /> 
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    {/* <Route path='/contact' element={<h1>I am from contact page</h1> }/> */}

    </Routes>

    </BrowserRouter>

    // <div>
    //   <h1>Hello World</h1>
    //   <h3 style={{color: "green"}}>I am a learner</h3>
    //   <h4>Age : {10+13}</h4>
    // </div>

  )
}

export default App
