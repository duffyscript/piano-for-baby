import { useState } from 'react';
import useStyles from '../styles';
import { keys } from '../config';
import SoundPlayerManager from '../services/SoundPlayerManager';
import PianoKey from './PianoKey';

const Piano = () => {
    const { classes } = useStyles();
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    let whiteKeyIndex = 0;

    const handleKeyDown = (name: string) => {
        const result = [...pressedKeys];

        if (!pressedKeys.includes(name)) {
            result.push(name);
            setPressedKeys(result);
            SoundPlayerManager.play(name);
        }

    };

    const handleKeyUp = (name: string) => {
        setPressedKeys(pressedKeys.filter(key => key !== name));
    };

    return (
        <>
            <div className={classes.root}>
                <div className={classes.keyboard}>
                    <div className={classes.keyboardKeys}>
                        {keys.map(key => {
                            const isPressed = pressedKeys.includes(key.name);
                            const isBlack = !!key?.black;

                            if (!isBlack) {
                                whiteKeyIndex++;
                            }

                            return (
                                <PianoKey
                                    key={key.name}
                                    {...{ isPressed, isBlack }}
                                    currentWhiteKeyIndex={whiteKeyIndex}
                                    onKeyDown={() => handleKeyDown(key.name)}
                                    onKeyUp={() => handleKeyUp(key.name)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Piano;