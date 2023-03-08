import React, { createContext, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// import Main from "./components/main/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PeoplesPage from "./components/pages/PeoplesPage";
import PlanetsPage from "./components/pages/PlanetsPage";
import ShipsPage from "./components/pages/ShipsPage";

export const GlobalTheme = createContext(null);
export const LanguageContext = React.createContext(null);
const App = () => {
  const [themeLight, useThemeLight] = useState(false);
  const [languageState, setLanguageState] = useState("eng");

  return (
    <div>
      <BrowserRouter>
        <GlobalTheme.Provider value={{ themeLight, useThemeLight }}>
          <LanguageContext.Provider value={{ languageState, setLanguageState }}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/peoples" element={<PeoplesPage />} />
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/ships" element={<ShipsPage />} />
            </Routes>
            <Footer />
          </LanguageContext.Provider>
        </GlobalTheme.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
