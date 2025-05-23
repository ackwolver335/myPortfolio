// required packages or subpackages
import {Routes, Route} from 'react-router-dom'

import './App.css'

// different components
import Navbar from './components/Navbar'

// import the pages that are used here
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>

      {/* adding a navbar here */}
      <Navbar />

      {/* using routes together in order to add components on different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* footer for page further Reference */}
      <Footer />

    </>
  )
}

export default App
