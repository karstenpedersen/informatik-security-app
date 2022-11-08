import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexPage from "./pages/IndexPage";
import Theme from "./themes";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<IndexPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
