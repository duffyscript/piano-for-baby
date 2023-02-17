import { TeacherSceneType, SetSceneType } from "../types";

/**
 * Set tone to memory in teaching mode
 * @param name
 * @param scene
 * @param setScene
 */
const handleSetToneToMemory = (name: string, scene: TeacherSceneType, setScene: SetSceneType) => {
    const sceneTones = [...scene.tones];
    sceneTones.push(name);
    setScene({...scene, ...{tones: sceneTones}});
};

export default handleSetToneToMemory;