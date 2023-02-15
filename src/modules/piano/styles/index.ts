import { makeStyles } from '../../base/theme';

const useStyles = makeStyles()(
    (theme) => ({
        "root": {
            width: '98vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        keyboard: {
            background: theme.colors.primary,
            padding: '9vw 2vw 0 2vw',
            borderRadius: '2vw',
            boxShadow: '1px 7px 10px rgb(0 0 0 / 20%)',
        },
        keyboardKeys: {
            display: 'flex',
            position: 'relative',
        },
        key: {
            all: 'unset',
            width: 'calc(100% / 14)',
            background: '#fff',
            border: '0.12vw solid #000',
            borderRadius: '0 0 0.4vw 0.4vw',

            '&::before': {
                content: '""',
                display: 'block',
                width: '100%',
                paddingBottom: '400%',
            },
        },
        keyPressed: {
            background: theme.colors.secondary,
        },
        keyBlack: {
            all: 'unset',
            position: 'absolute',
            left: '0',
            background: '#000',
            width: 'calc(100% / 14 / 1.7)',
            height: '60%',
            transform: 'translateX(-50%)',
            borderRadius: '0 0 0.2vw 0.2vw',
            border: '1px solid #000',
            borderTop: 'none',
        },
        keyBlackPressed: {
            borderColor: theme.colors.secondaryDark,
        },
    }),
);

export default useStyles;