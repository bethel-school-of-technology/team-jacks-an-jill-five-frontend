import React from 'react'
import SignUp from './components/SignUp';
import Home from './components/Home';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn'; 
import Fairlist from './components/Fairlist'
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddFair from './components/AddFair';

function App() {
  return (
    <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home />}>
   <Route index element={<Welcome />}/>
   <Route path="signup" element={<SignUp />} />
   <Route path="signin" element={<SignIn />} />
   <Route path="fairlist" element={<Fairlist />} />
   <Route path="addfair" element={<AddFair />} />
   <Route path="about" element={<AboutUs />} />
   </Route>

</Routes>
<Footer />
    </BrowserRouter>

  )
}

export default App;
