import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Header from './Components/Layouts/Header.jsx';
import Loader from './Components/Loader.jsx';
import Footer from './Components/Layouts/Footer.jsx';
import About from './Components/About.jsx';
import Contect from './Components/Contect.jsx';
import Service from './Components/Service.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API call or content loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay to simulate loading

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />; // Show the loader when loading is true
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contect/>} />
        <Route path='/Service' element={<Service/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
