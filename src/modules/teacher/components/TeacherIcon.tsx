import { useEffect, useState } from 'react';
import useStyles from '../styles';

const TeacherIcon = () => {
    const { classes, cx } = useStyles();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return <div className={cx(classes.icon, show && classes.iconShowed)} />;
};

export default TeacherIcon;