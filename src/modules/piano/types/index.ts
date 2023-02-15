export type PianoKeyProps = {
    isPressed: boolean;
    isBlack: boolean;
    currentWhiteKeyIndex: number;
    onKeyDown: () => void;
    onKeyUp: () => void;
}