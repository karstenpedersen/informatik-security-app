import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        highlight: "#1279D1",
        dark: "#111111",
        background: "#F4F4F4",
        gray: "#424242",
        black: "#000000",
        white: "#FFFFFF",
    },
    font: {
        header: "Poppins",
        paragraph: "Open Sans",
    },
    fontSize: {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
    spacing: {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
    wrapper: "10%",
}

const Theme = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;