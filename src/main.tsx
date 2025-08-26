import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/play/400.css'
import '@fontsource/play/700.css'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        brand: {
            900: "#0d47a1",
            800: "#1565c0",
            700: "#1976d2",
            600: "#1e88e5",
            500: "#2196f3",
            400: "#42a5f5",
            300: "#64b5f6",
            200: "#90caf9",
            100: "#bbdefb",
            50: "#e3f2fd",
        },
        gray: {
            900: "#212121",
            800: "#424242",
            700: "#616161",
            600: "#757575",
            500: "#9e9e9e",
            400: "#bdbdbd",
            300: "#e0e0e0",
            200: "#eeeeee",
            100: "#f5f5f5",
            50: "#fafafa",
        }
    },
    fonts: {
        heading: 'Play',
        body: 'Play',
    }
});

localStorage.setItem('chakra-ui-color-mode', 'dark');

// check if path is /discord
if (window.location.pathname === '/discord') {
    window.location.href = 'https://discord.gg/X6CfMYJGbV';
} else if (window.location.pathname === '/vote') {
    window.location.href = 'https://minecraftpocket-servers.com/server/96869/vote/';
} else if (window.location.pathname === '/') {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </React.StrictMode>,
    )
}else{
    window.location.pathname = '/';
}
