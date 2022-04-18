import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import { useOnClickOutside, useDisableBodyScroll } from "./hooks";
import SubsProvider from "./context/subsContext";
import { GlobalStyles } from "./global";
import { Home, Login, Subscriptions, Feed } from "./pages";
import { Burger, Menu } from "./components";

function App() {
  const node = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  useOnClickOutside(node, () => setOpen(false));
  useDisableBodyScroll(open);

  return (
    <ThemeProvider theme={theme}>
      <SubsProvider>
        <GlobalStyles />
        <div className="nav" ref={node}>
          <FocusLock disabled={!open}>
            <div className="burger">
              <Burger open={open} setOpen={setOpen} />
            </div>
            <div className="menu">
              <Menu open={open} />
            </div>
          </FocusLock>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
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
                  <Subscriptions />
                </>
              }
            />
            <Route
              path="/feed"
              element={
                <>
                  <Feed />
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
