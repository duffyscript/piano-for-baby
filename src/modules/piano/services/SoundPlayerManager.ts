import { Howl } from 'howler';
import SoundSourceManager from '../services/SoundSourceManager';

/**
 * Service for sound manager
 */
class SoundPlayerManager {
    /**
     * Play tone
     * @param name
     */
    static play(name: string) {
        const sourceManager = new SoundSourceManager();
        let sound = new Howl({
            src: [sourceManager.getToneSource(name)],
        });
        sound.play();
    }
}

export default SoundPlayerManager;