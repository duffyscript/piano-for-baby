import type { FC } from 'react';
import { useState } from 'react';
import TeacherContext from "../contexts/teacherContext";
import type { TeacherProviderType, TeacherSceneType } from "../types";
import { defaultScene } from "../config";

const TeacherProvider:FC<TeacherProviderType> = ({ children }) => {
    const [value, setValue] = useState<TeacherSceneType>(defaultScene);

    return (
        <TeacherContext.Provider value={{
            ...value,
            setScene: setValue,
        }}>
            {children}
        </TeacherContext.Provider>
    );
};

export default TeacherProvider;