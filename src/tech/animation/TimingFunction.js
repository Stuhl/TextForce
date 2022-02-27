class TimingFunction {
  static custom = {}

  static get(name) {
    let timingFunction = null

    if (TimingFunction.hasOwnProperty(name)) {
      timingFunction = TimingFunction[name]
    }

    if (TimingFunction.custom.hasOwnProperty(name)) {
      timingFunction = TimingFunction.custom[name]
    }

    if (!timingFunction) {
      throw new Error(`TimingFunction::get(): Timing function '${name}' cannot be found. Available timing functions are: ${TimingFunction.getAllTimingFunctions().toString().replace(/,/ig, ", ")}`)
    }

    return timingFunction
  }

  static getAllTimingFunctions() {
    const allFunctions = ["linear", "quadratic", "cubic", "elastic"]

    const customFunctionsKeys = Object.keys(TimingFunction.custom)

    for (let fn of customFunctionsKeys) {
      allFunctions.push(fn)
    }

    return allFunctions
  }

  static linear(x) {
    return x
  }

  static quadratic(x) {
    return Math.pow(x, 2)
  }

  static easeOutQuadratic(x) {
    return 1 - Math.pow(1 - x, 2)
  }

  static easeInOutQuadratic(x) {
    let formula = null

    if (x < 0.5) {
      formula = 2 * x * x
    } else {
      formula = 1 - Math.pow(-2 * x + 2, 2) / 2
    }

    return formula
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

  static add(name, timingFunction) {
    TimingFunction._assertAdd(name, timingFunction)
    TimingFunction.custom[name] = timingFunction
  }

  static _assertAdd(name, timingFunction) {
    if (!name) {
      throw new Error("TextForce.Timing::add(): Parameter 'name' cannot be falsy or missing.")
    }

    if (typeof name !== "string") {
      throw new Error("TextForce.Timing::add(): Parameter 'name' is not a string. Has to be of type <string>.")
    }

    if (TimingFunction._isCustomFunctionAlreadyDefined(name)) {
      throw new Error(`TextForce.Timing::add(): Custom timing function '${name}' is already defined. Use a different name.`)
    }

    if (!timingFunction) {
      throw new Error("TextForce.Timing::add(): Parameter 'timingFunction' cannot be falsy or missing.")
    }

    if (typeof timingFunction !== "function") {
      throw new Error("TextForce.Timing::add(): Parameter 'timingFunction' is not a function. Has to be of type <function>.")
    }

    if (timingFunction.length !== 1) {
      throw new Error(`TextForce.Timing::add(): Parameter 'timingFunction' does not have 1 parameter. It has to have exactly 1 parameter (best called x). Currently it has: ${timingFunction.length} parameters.`)
    }
  }

  static _isCustomFunctionAlreadyDefined(name) {
    return TimingFunction.custom.hasOwnProperty(name)
  }
}

export default TimingFunction
