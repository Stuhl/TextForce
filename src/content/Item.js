class Item {
  constructor(options) {
    const {name, price, desc, type, stats, kind} = options
    this.name = name
    this.price = price
    this.desc = desc
    this.type = type
    this.stats = stats
    this.kind = kind
  }

  getData() {
    return {
      name: this.name,
      price: this.price,
      desc: this.desc,
      type: this.type,
      stats: this.stats,
      kind: this.kind
    }
  }
}

export default Item
