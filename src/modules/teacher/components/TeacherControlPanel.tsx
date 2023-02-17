import type { FC } from 'react';
import type { TeacherControlPanelProps } from "../types";
import useStyles from '../styles';
import { defaultScene } from "../config";
import TeacherCongratulions from "./TeacherCongratulions";

const TeacherControlPanel:FC<TeacherControlPanelProps> = ({ scene, setScene }) => {
    const { classes, cx } = useStyles();
    const { teacher, student, tones, finished } = scene;

    const handleStartTeacher = () => {
        setScene({...scene, ...{ teacher: true }});
    };

    const handleStopTeacher = () => {
        setScene(defaultScene);
    };

    const handleStartStudent = () => {
        setScene({...scene, ...{ student: true, current: 0 }});
    };

    const handleStopStudent = () => {
        setScene({...scene, ...{ student: false, current: undefined }});
    };

    return (
        <div className={classes.controlPanel}>
            <button
                className={cx(classes.button, classes.teacher, teacher && classes.teacherActive)}
                onClick={() => {
                    if (teacher) {
                        handleStopTeacher();
                    } else {
                        handleStartTeacher();
                    }
                }}
            >
                1
            </button>

            <button
                className={cx(
                    classes.button,
                    classes.student,
                    !teacher || tones.length === 0 ? classes.buttonDisabled : undefined,
                    student && classes.studentActive,
                )}
                {...((!teacher || tones.length === 0) && {disabled: true})}
                onClick={() => {
                    if (student) {
                        handleStopStudent();
                    } else {
                        handleStartStudent();
                    }
                }}
            >
                2
            </button>

            <TeacherCongratulions {...{finished}} />
        </div>
    );
};

export default TeacherControlPanel;