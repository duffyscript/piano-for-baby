import useStyles from '../styles';
import { TeacherControlPanel } from '../../teacher';
import PianoKeyboardKeys from "../containers/PianoKeyboardKeys";
import TeacherProvider from "../../teacher/components/TeacherProvider";

const Piano = () => {
    const { classes } = useStyles();

    return (
        <TeacherProvider>
            <div className={classes.root}>
                <div className={classes.keyboard}>
                    <TeacherControlPanel />

                    <PianoKeyboardKeys />
                </div>
            </div>
        </TeacherProvider>
    );
};

export default Piano;