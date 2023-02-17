import { useContext } from "react";
import TeacherContext from "../../teacher/contexts/teacherContext";
import PianoKeyboardKeys from "../components/PianoKeyboardKeys";

const PianoKeyboardKeysContainer = () => {
    const { setScene, ...scene } = useContext(TeacherContext);

    return (
        <PianoKeyboardKeys {...{scene, setScene}} />
    );
};

export default PianoKeyboardKeysContainer;