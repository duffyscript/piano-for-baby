import { TeacherSceneType, SetSceneType } from "../types";

/**
 * Handle key click in study mode
 * @param name
 * @param scene
 * @param setScene
 */
const handleStudy = (name: string, scene: TeacherSceneType, setScene: SetSceneType) => {
    if (scene.current === undefined || scene.tones[scene.current] !== name) {
        return;
    }

    const lastKey = scene.current === scene.tones.length - 1;
    let nextTone = scene.current + 1;

    if (lastKey) {
        nextTone = 0;
    }

    setScene({
        ...scene,
        ...{
            current: nextTone,
            ...(lastKey && {finished: true}),
        },
    });
};

export default handleStudy;