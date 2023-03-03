import React, { createContext, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

export const GlobalTheme = createContext(null);
export const LanguageContext = React.createContext(null);
const App = () => {
  const [themeLight, useThemeLight] = useState(false);
  const [languageState, setLanguageState] = useState("eng");

  return (
    <div>
      <GlobalTheme.Provider value={{ themeLight, useThemeLight }}>
        <LanguageContext.Provider value={{ languageState, setLanguageState }}>
          <Header />
          <Main />
          <Footer />
        </LanguageContext.Provider>
      </GlobalTheme.Provider>
    </div>
  );
};

export default App;
