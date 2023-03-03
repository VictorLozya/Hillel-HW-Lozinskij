import React, { createContext, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

export const GlobalTheme = createContext(null);
// const LanguageContext = React.createContext("");
const App = () => {
  const [themeLight, useThemeLight] = useState(false);
  return (
    <div>
      <GlobalTheme.Provider value={{ themeLight, useThemeLight }}>
        <Header />
        <Main />
        <Footer />
      </GlobalTheme.Provider>
    </div>
  );
};

export default App;
