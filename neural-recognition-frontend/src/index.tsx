import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { TranslationContextProvider } from './contexts/translate';
import { MainPage } from './containers/MainPage';
import { theme } from './services/material';
import { ThemeProvider } from '@emotion/react';
import { ResultsPage } from './containers/ResultsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TranslationContextProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="results" element={<ResultsPage />} />
          </Routes>
        </TranslationContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
