import type { FC } from 'react';
import type { PianoKeyboardKeysProps } from "../types";
import { keys } from "../config";
import PianoKey from "./PianoKey";
import useStyles from "../styles";

const PianoKeyboardKeys: FC<PianoKeyboardKeysProps> = ({ scene, setScene }) => {
    const { classes } = useStyles();
    let whiteKeyIndex = 0;

    return (
        <div className={classes.keyboardKeys}>
            {keys.map(key => {
                const isBlack = !!key?.black;

                if (!isBlack) {
                    whiteKeyIndex++;
                }

                return (
                    <PianoKey
                        name={key.name}
                        key={key.name}
                        {...{ isBlack, scene, setScene }}
                        currentWhiteKeyIndex={whiteKeyIndex}
                    />
                );
            })}
        </div>
    );
};

export default PianoKeyboardKeys;