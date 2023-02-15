import { Howl } from 'howler';
// import getSoundByTone from "../utils/getSoundByTone";
import SoundSourceManager from '../services/SoundSourceManager';

class SoundPlayerManager {
    static play(name: string) {
        const sourceManager = new SoundSourceManager();
        // eslint-disable-next-line no-console
        console.log('ttt', sourceManager.getToneSource(name));
        let sound = new Howl({
            src: [sourceManager.getToneSource(name)],
        });
        sound.play();
    }
}

export default SoundPlayerManager;