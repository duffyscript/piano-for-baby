import { useContext, useEffect } from 'react';
import TeacherContext from "../contexts/teacherContext";
import TeacherControlPanel from "../components/TeacherControlPanel";

const TeacherControlPanelContainer = () => {
    const { setScene, ...scene } = useContext(TeacherContext);

    useEffect(() => {
        if (scene.finished) {
            setTimeout(() => {
                setScene({...scene, ...{finished: false}});
            }, 3000);
        }
    }, [scene.finished]);

    return (
        <TeacherControlPanel {...{scene, setScene}} />
    );
};

export default TeacherControlPanelContainer;