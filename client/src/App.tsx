import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Search, Login } from "./pages";
import { Header, Burger, Menu } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FocusLock from "react-focus-lock";

import { useOnClickOutside, useDisableBodyScroll } from "./hooks";

function App() {
  const [open, setOpen] = useState<Boolean>(false);
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);
  const node = useRef<HTMLInputElement | null>(null);
  useOnClickOutside(node, () => setOpen(false));
  useDisableBodyScroll(open);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login loggedIn={() => setLoggedIn(!loggedIn)} />}
          />
          <Route
            path="/Search"
            element={
              <>
                <Header />
                <Search />
              </>
            }
          />
        </Routes>
      </Router>

      {loggedIn && (
        <div ref={node}>
          <FocusLock disabled={!open}>
            <div className="burger">
              <Burger open={open} setOpen={setOpen} />
            </div>
            <div className="menu">
              <Menu open={open} setOpen={setOpen} />
            </div>
          </FocusLock>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
