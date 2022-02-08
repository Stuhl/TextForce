class TimingFunction {
  static linear(x) {
    return x
  }

  static quadratic(x) {
    return Math.pow(x, 2)
  }

  static cubic(x) {
    return Math.pow(x, 3)
  }

  static elastic(x) {
    const c4 = (2 * Math.PI) / 3

    if (x === 0) {
      return 0
    }

    if (x === 1) {
      return 1
    }

    return -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }
}

export default TimingFunction
