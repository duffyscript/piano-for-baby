import type { TeacherSceneType, SetSceneType } from "../../teacher/types";

export type PianoKeyProps = {
    name: string;
    isBlack: boolean;
    currentWhiteKeyIndex: number;
    scene: TeacherSceneType;
    setScene: SetSceneType;
};

export type PianoKeyboardKeysProps = {
    scene: TeacherSceneType;
    setScene: SetSceneType;
};

export type TeacherCongratulionsProps = {
    finished: boolean;
}

export type TeacherIconContainerProps = {
    toneName: string;
}