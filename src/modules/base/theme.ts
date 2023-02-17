import { createMakeAndWithStyles } from "tss-react";

function useTheme() {
    return {
        colors: {
            gray: "#6c6c6c",
            primary: "#3cff79",
            secondary: "#ae71ff",
            secondaryLight: "#d8bdff",
            secondaryDark: "#8533ff",
            error: '#ff5b5b',
            errorDark: '#ff3333',
        },
    };
}

export const {
    makeStyles,
    withStyles,
    useStyles,
} = createMakeAndWithStyles({ useTheme });