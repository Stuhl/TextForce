import TextForce from "./TextForce"

const testAnimation = () => {
  const text           = new TextForce.Text("text", "You dealt")
  const dmg            = new TextForce.Text("dmg", "50!!!")
  const text2          = new TextForce.Text("text2", "Damage!")
  const criticalStrike = new TextForce.Text("critical", "CRITICAL DAMAGE!!!")
  document.body.appendChild(criticalStrike.element)
  document.body.appendChild(text.element)
  document.body.appendChild(dmg.element)
  document.body.appendChild(text2.element)

  text.setX(10)
  dmg.setX(80)
  text2.setX(120)
  text.setY(50)
  dmg.setY(50)
  text2.setY(50)

  text.setColor(`hsla(0, 0%, 0%, 0)`)
  dmg.setColor(`hsla(0, 0%, 0%, 0)`)
  text2.setColor(`hsla(0, 0%, 0%, 0)`)


  text.show()
  dmg.show()
  text2.show()
  criticalStrike.show()

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
    timing  : "cubic"
  })

  const anim2 = new TextForce.Animation({
    duration: 200,
    element : dmg,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "cubic"
  })

  const anim3 = new TextForce.Animation({
    duration: 200,
    element : text2,
    effect  : (target, progress) => {
      target.setColor(`hsla(0, 0%, 0%, ${progress})`)
    },
    timing  : "cubic"
  })

  criticalAnimation.start().then(done => {
    if (done) {
      anim.start()
      anim2.start()
      anim3.start()
    }
  })
}

// testAnimation()
