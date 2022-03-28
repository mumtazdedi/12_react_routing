import React from 'react';
import './App.css';

/* components and screen/page */
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import About from './screens/About';
import AboutApp from './screens/AboutApp';
import NotFound from './screens/NotFound';

/* react router dom */
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/about-app" element={<AboutApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
