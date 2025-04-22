import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Toaster} from 'react-hot-toast';
import {createTheme, ThemeProvider} from "@mui/material";



const theme = createTheme({
    typography: {
        fontFamily: [
            'casa',
        ].join(','),
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
            <Toaster position='top-center'/>
        </ThemeProvider>
    </React.StrictMode>
);






