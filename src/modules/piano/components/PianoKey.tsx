import type { FC } from 'react';
import { useState, useEffect } from 'react';
import useStyles from '../styles';
import type { PianoKeyProps } from '../types';
import { keys } from '../config';
import { TeacherIcon } from '../../teacher';
import isTouch from '../../base/utils/isTouch';
import SoundPlayerManager from "../services/SoundPlayerManager";
import handleSetToneToMemory from "../../teacher/eventHandlers/handleSetToneToMemory";
import handleStudy from "../../teacher/eventHandlers/handleStudy";

const PianoKey: FC<PianoKeyProps> = ({
    name,
    isBlack,
    currentWhiteKeyIndex,
    scene,
    setScene,
}) => {
    const { classes, cx } = useStyles();
    const whiteKeys = keys.filter(key => !key?.black);
    const [pressed, setPressed] = useState(false);
    const isPressed = pressed;

    useEffect(() => {
        if (scene.finished) {
            setPressed(false);
        }
    }, [scene.finished]);

    const handleKeyDown = () => {
        setPressed(true);
        SoundPlayerManager.play(name);

        if (scene.student && scene.current !== undefined) {
            handleStudy(name, scene, setScene);
        } else if (scene.teacher) {
            handleSetToneToMemory(name, scene, setScene);
        }
    };

    const handleKeyUp = () => {
        setPressed(false);
    };

    return (
        <button
            {...(!isBlack && {className: cx(classes.key, classes.keyWhite, isPressed && classes.keyPressed)})}
            {...(isBlack && {
                className: cx(classes.key, classes.keyBlack, isPressed && classes.keyPressed, isPressed && classes.keyBlackPressed),
                style: {
                    left: ((100 / whiteKeys.length) * currentWhiteKeyIndex) + '%',
                },
            })}
            {...(isTouch && {
                onTouchStart: handleKeyDown,
                onTouchEnd: handleKeyUp,
            })}
            {...(!isTouch && {
                onMouseDown: handleKeyDown,
                onMouseUp: handleKeyUp,
            })}
        >
            <TeacherIcon toneName={name} />
        </button>
    );
};

export default PianoKey;