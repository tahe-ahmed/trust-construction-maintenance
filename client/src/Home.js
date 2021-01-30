import withRoot from "./withRoot";
// --- Post bootstrap -----
import React from "react";
import CompletedProjects from "./HomeSections/CompletedProjects";
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from "./HomeSections/AppFooter";
import Introduction from "./HomeSections/Introduction";
import OurValues from "./HomeSections/OurValues";
import ScopeOfWork from "./HomeSections/ScopeOfWork";
// import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from "./HomeSections/AppAppBar";
import Reviews from "./HomeSections/Reviews"

import Work from "./HomeSections/works"
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <Introduction />
      <OurValues />
      <Reviews />
      <Work />
      
      <CompletedProjects />

      {/* <ProductCTA />
      <ProductSmokingHero /> */}
      <AppFooter />
    </ThemeProvider>
  );
};

export default Home;
