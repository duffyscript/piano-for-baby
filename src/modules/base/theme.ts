import { createMakeAndWithStyles } from "tss-react";

function useTheme() {
    return {
        colors: {
            primary: "#3cff79",
            secondary: "#ae71ff",
            secondaryLight: "#d8bdff",
            secondaryDark: "#8533ff",
        },
    };
}

export const {
    makeStyles,
    withStyles,
    useStyles,
} = createMakeAndWithStyles({ useTheme });