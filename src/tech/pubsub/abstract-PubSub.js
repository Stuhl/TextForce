/**
 * This is the abstract pub sub class. Use this to code a implementation of a PubSub class
 */
class AbstractPubSub {
  constructor() {
    if (!this.subscribe) {
      throw new Error("PubSub implementation: Missing subscribe() method.")
    }

    if (this.unsubscribe === undefined) {
      throw new Error("PubSub implementation: Missing unsubscribe() method.")
    }

    if (this.publish === undefined) {
      throw new Error("PubSub implementation: Missing publish() method.")
    }
  }
}

export default AbstractPubSub
