/**
 * This is the utility class. It has common helper functions needed for games
 */
class Utility {
  /**
   * Waits for x amount of time. Can be used to delay animations, sounds etc.
   * @param  {number}   milliseconds - The amount of waiting time in milliseconds
   * @return {Promise} - A promise that resolves when the time is reached
   * @example <caption>Simplified game example</caption>
   * playerAttack()
   * playerAttackSound()
   * await wait(500)
   * enemyAttack()
   * enemyAttackSound()
   */
  static wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
}

export default Utility
