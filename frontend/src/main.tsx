import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./style.css";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Device from './infrastructure/constants/device.ts';

const darkTheme = Device.os == "dark"
  ? createTheme({
    palette: {
      mode: 'dark',
    },
  })
  : createTheme({
    palette: {
      mode: 'light',
    },
  });


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
