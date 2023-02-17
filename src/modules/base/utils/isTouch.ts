/**
 * Detect touch device
 */
const isTouch = matchMedia('(hover: none)').matches;

export default isTouch;