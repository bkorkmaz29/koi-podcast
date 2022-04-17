import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import  SubsProvider  from './context/subsContext';
import { GlobalStyles } from "./global";
import { Home, Login, Subscriptions } from "./pages";


function App() {

  

  return (
    <ThemeProvider theme={theme}>
      <SubsProvider>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login/>}
            />
              <Route
                path="/home"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route
                path="/subs"
                element={
                  <>
                    <Subscriptions  />
                  </>
                }
              />
          </Routes>
        </Router>
        </SubsProvider>
    </ThemeProvider>
  );
}

export default App;
