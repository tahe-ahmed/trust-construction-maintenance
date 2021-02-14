import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }
  primary: {
    light: '#F2E9E4',
    silver: '#C9ADA7',
    gray: '#9A8C98',
    lightdark: '#4A4E69',
    dark:"#22223B"
  },

  return WithRoot;
}