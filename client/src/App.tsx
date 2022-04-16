import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./global";
import { Home, Login } from "./pages";


function App() {

  return (
    <ThemeProvider theme={theme}>
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
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
