import type { FC } from 'react';
import { useEffect, useState } from 'react';
import useStyles from '../styles';
import type { TeacherCongratulionsProps } from "../../piano/types";

const TeacherCongratulions: FC<TeacherCongratulionsProps> = ({ finished }) => {
    const { classes, cx } = useStyles();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (finished) {
            setShow(true);
        } else {
            if (show) {
                setShow(false);
            }
        }
    }, [finished]);

    return (
        <>
            {finished && <div className={classes.congratulionsOverlay}/>}
            <div className={cx(classes.icon, classes.iconCongratulions, show && classes.iconCongratulionsShowed)} />
        </>
    );
};

export default TeacherCongratulions;