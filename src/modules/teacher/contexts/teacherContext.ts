import { createContext } from 'react';
import type { TeacherContextType } from "../types";
import { defaultScene } from "../config";

const TeacherContext = createContext<TeacherContextType>({
    ...defaultScene,
    setScene: () => undefined,
});

export default TeacherContext;