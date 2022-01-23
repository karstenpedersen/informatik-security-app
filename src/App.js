import { React, Component } from 'react';
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import StudentPage from "./pages/StudentPage";
import Theme from './themes';
import Footer from "./components/Footer";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" exact element={<IndexPage/>}/>
          <Route path="/it-sikkerhed" exact element={<StudentPage/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </Theme>
  )
}

export default App;
