import { Howl } from 'howler';
import SoundSourceManager from '../services/SoundSourceManager';

class SoundPlayerManager {
    static play(name: string) {
        const sourceManager = new SoundSourceManager();
        let sound = new Howl({
            src: [sourceManager.getToneSource(name)],
        });
        sound.play();
    }
}

export default SoundPlayerManager;