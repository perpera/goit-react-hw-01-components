import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    black: '#0f0f0f',
    white: '#fafafa',
    blue: '#6495ed',
    green: '#90ee90',
    // lightgreen: '',
    red: '#ff6347',
    grey: '#dcdcdc',
    darkgrey: '#808080',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
