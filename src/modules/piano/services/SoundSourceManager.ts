import { ENHARMONIC_EQUIVALENT, OCTAVE_TONES } from '../config';

/**
 * Manager for preparing a path to a tone file
 */
class SoundSourceManager {
    private soundDir = 'media/piano-mp3/';
    private soundExt = 'mp3';
    private finalFilename = '';

    /**+
     * Get path to mp3 file by tone name
     * @param name
     */
    getToneSource (name: string) {
        this.makeFilenameFromTone(name);

        return this.finalFilename;
    }

    /**
     * Prepare filename from tone
     * @param toneName
     */
    makeFilenameFromTone(toneName: string) {
        this.finalFilename = toneName;

        if (ENHARMONIC_EQUIVALENT && this.isBlackTone(toneName)) {
            this.getEnharmonicEquivalent();
        }

        // Change hash to b string
        this.finalFilename = this.finalFilename.replace('#', 'b');

        // Change CZ tone H to international B
        this.finalFilename = this.finalFilename.replace('H', 'B');

        // Final path
        this.finalFilename = this.soundDir + this.finalFilename + '.' + this.soundExt;
    }

    /**
     * Get enharmonic equivalent of tone
     */
    getEnharmonicEquivalent() {
        const tone = this.finalFilename.charAt(0);
        const originalToneIndex = OCTAVE_TONES.indexOf(tone);
        const newTone = OCTAVE_TONES[originalToneIndex + 1];
        this.finalFilename = this.finalFilename.replace(tone, newTone);
    }

    /**
     * Check if tone is black
     * @param toneName
     */
    isBlackTone(toneName: string) {
        return toneName.includes('#');
    }
}

export default SoundSourceManager;