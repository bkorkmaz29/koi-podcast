import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme";
import UserProvider from "./context/userContext";
import { GlobalStyles } from "./global";
import { Home, Login, Subscriptions, Feed } from "./pages";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
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
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
