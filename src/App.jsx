import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import Cart from "./pages/CartPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import "./App.css"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } /> */}
          <Route path="/"
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            } />
          <Route path="/cart"
            element={
              <CommonContainer>
                <Cart />
              </CommonContainer>
            } />

          <Route path="/contact"
            element={
              <CommonContainer>
                <Contact />
              </CommonContainer>
            } />

          <Route path="/login"
            element={
              <Login />
            } />

          <Route path="/signup"
            element={
              <Signup />
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;