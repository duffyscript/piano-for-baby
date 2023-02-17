import type { ReactNode, Dispatch } from 'react';

export type TeacherProviderType = {
    children: ReactNode;
}

export type TeacherSceneType = {
    current: number | undefined;
    teacher: boolean;
    student: boolean;
    finished: boolean;
    tones: string[];
}

export type SetSceneType = Dispatch<TeacherSceneType>;

export type TeacherContextType = TeacherSceneType & {
    setScene: SetSceneType;
}

export type TeacherControlPanelProps = {
    scene: TeacherSceneType;
    setScene: SetSceneType;
}