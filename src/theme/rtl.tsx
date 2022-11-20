import React from "react";
import { createMuiTheme, StylesProvider, jssPreset, ThemeProvider } from "@material-ui/core";
import rtl from "jss-rtl";
import { create } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "iranyekan",
    },
    direction: "rtl",
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    padding: "50px",
                },
            },
        },
    },
});

const RTL = (props: React.PropsWithChildren<{}>) => {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};

export default RTL;
