/**
 * The animation configuration
 * @typedef  {Object}   AnimationConfig - The animation configuration
 * @property {number}   duration        - The duration of the animation in milliseconds
 * @property {Text}     element         - A instance of the Text class
 * @property {Function} effect          - The effect function
 * @property {string}   timing          - The timing function used for the animation
 * @example <caption>Example configuration</caption>
 *{
 *  duration: 1000,       // = 1 second
 *  element : theElement, // could be Text, Canvas etc.
 *  effect  : (target, progress) => { // You can set the color, move the element around etc.
 *    target.setColor(`hsla(0, 0%, 0%, ${progress})`)
 *  },
 *  timing  : "linear"    // this is also called lerp (linear interpolation)
 *}
 */
