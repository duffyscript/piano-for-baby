import { makeStyles } from '../../base/theme';

const useStyles = makeStyles()(
    (theme) => ({
        icon: {
            background: 'url("/media/face-smile.svg") no-repeat 0 0',
            borderRadius: '50%',
            width: '5vw',
            height: '5vw',
            position: 'absolute',
            bottom: '.5vw',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
            transition: 'opacity 500ms',
            pointerEvents: 'none',
        },
        iconShowed: {
            opacity: 1,
        },
        iconCongratulions: {
            opacity: 1,
            width: '0vw',
            height: '0vw',
            position: 'fixed',
            top: '50%',
            left: '50%',
            bottom: 'auto',
            zIndex: '50',
            transform: 'translate(-50%, -50%)',
            transition: 'width 500ms, height 500ms',
        },
        iconCongratulionsShowed: {
            width: '60vw',
            height: '60vw',
        },
        congratulionsOverlay: {
            position: 'fixed',
            top: '0%',
            right: '0',
            bottom: '0',
            left: '0',
            zIndex: '40',
        },
        controlPanel: {
            position: 'absolute',
            top: '2vw',
            right: '2vw',
            display: 'flex',
            gap: '.6vw',
        },
        button: {
            all: 'unset',
            userSelect: 'none',
            width: '4vw',
            height: '4vw',
            borderRadius: '50%',
            background: theme.colors.gray,
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '2.5vw',

            '&:not([disabled])': {
                cursor: 'pointer',
            },

            '&:not([disabled]):hover': {
                background: '#000',
            },

            '&:focus': {
                outline: 'none',
                boxShadow: 'none',
            },
        },
        teacher: {

        },
        teacherActive: {
            background: theme.colors.error,

            '&:not([disabled]):hover': {
                background: theme.colors.errorDark,
            },
        },
        student: {

        },
        studentActive: {
            background: theme.colors.secondary,

            '&:not([disabled]):hover': {
                background: theme.colors.secondaryDark,
            },
        },
        buttonDisabled: {
            opacity: .3,
        },
    }),
);

export default useStyles;