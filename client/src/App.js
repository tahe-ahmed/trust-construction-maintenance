import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import CompletedProjects from "./HomeSections/CompletedProjects";
import Footer from "./HomeSections/Footer";
import Introduction from "./HomeSections/Introduction";
import OurValues from "./HomeSections/OurValues";
import NavBar from "./HomeSections/NavBar";
import WorkScope from "./HomeSections/WorkScope";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ContactUs from "./ContactPages/contactUs";

const App = () => {
  const languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Dutch"
  );

  const storeLanguageInLocalStorage = (language) => {
    localStorage.setItem("language", language);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar language={language} />
        <Switch>
          <Route exact path="/">
            <Introduction language={language} />
            <OurValues language={language} />
            {/* <Reviews /> */}
            <WorkScope language={language} />
            <CompletedProjects language={language} />
          </Route>
          <Route exact path="/contactUs">
            <ContactUs language={language} />
          </Route>
        </Switch>

        <Footer
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;
