import TextForce from "./TextForce"

const testAnimation = async () => {
  const text           = new TextForce.Text("text", "You dealt")
  const dmg            = new TextForce.Text("dmg", "50!!!")
  const text2          = new TextForce.Text("text2", "Damage!")
  const criticalStrike = new TextForce.Text("critical", "CRITICAL DAMAGE!!!")

  document.body.appendChild(criticalStrike.element)
  document.body.appendChild(text.element)
  document.body.appendChild(dmg.element)
  document.body.appendChild(text2.element)

  console.dir(TextForce.Timing)

  TextForce.Timing.add("easeOutQuad", (x) => {
    return 1 - (1 - x) * (1 - x)
  })


  text.setX(10)
  text.setY(50)
  text.setColor(`hsla(0, 0%, 0%, 0)`)

  dmg.setX(80)
  dmg.setY(50)
  dmg.setColor(`hsla(0, 0%, 0%, 0)`)

  text2.setX(120)
  text2.setY(50)
  text2.setColor(`hsla(0, 0%, 0%, 0)`)


  text.show()
  dmg.show()
  text2.show()
  // criticalStrike.show()

  const criticalAnimation = new TextForce.Animation({
    duration: 2000,
    element : criticalStrike,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "elastic"
  })

  const anim = new TextForce.Animation({
    duration: 200,
    element : text,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "elastic"
  })

  const anim2 = new TextForce.Animation({
    duration: 2000,
    element : dmg,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "easeOutQuad"
  })

  const anim3 = new TextForce.Animation({
    duration: 200,
    element : text2,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "cubic"
  })

  // await criticalAnimation.start()

  anim.start()
  anim2.start()
  anim3.start()
}

testAnimation()
