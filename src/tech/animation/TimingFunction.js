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
}

export default TimingFunction
