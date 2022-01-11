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
