import type { FC } from 'react';
import useStyles from '../styles';
import type { PianoKeyProps } from '../types';
import { keys } from '../config';

const PianoKey: FC<PianoKeyProps> = ({
     isPressed,
     isBlack,
     currentWhiteKeyIndex,
     onKeyDown,
     onKeyUp,
}) => {
    const { classes, cx } = useStyles();
    const whiteKeys = keys.filter(key => !key?.black);

    return (
        <button
            {...(!isBlack && {className: cx(classes.key, isPressed && classes.keyPressed)})}
            {...(isBlack && {
                className: cx(classes.keyBlack, isPressed && classes.keyPressed, isPressed && classes.keyBlackPressed),
                style: {
                    left: ((100 / whiteKeys.length) * currentWhiteKeyIndex) + '%',
                },
            })}
            onTouchStart={onKeyDown}
            onMouseDown={onKeyDown}
            onMouseUp={onKeyUp}
        />
    );
};

export default PianoKey;