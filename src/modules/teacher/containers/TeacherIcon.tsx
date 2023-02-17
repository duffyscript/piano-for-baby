import type { FC } from "react";
import { useContext } from "react";
import TeacherIcon from "../components/TeacherIcon";
import TeacherContext from "../contexts/teacherContext";
import type { TeacherIconContainerProps } from "../../piano/types";

const TeacherIconContainer: FC<TeacherIconContainerProps> = ({ toneName }) => {
    const { setScene, ...scene } = useContext(TeacherContext);
    const { student, current, tones, finished } = scene;

    if (student && !finished && current !== undefined && tones[current] === toneName) {
        return (
            <TeacherIcon />
        );
    }

    return null;
};

export default TeacherIconContainer;