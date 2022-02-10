let movement = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        movement = 1
    }
    if (input.acceleration(Dimension.Y) > 500) {
        movement = 1
    }
    if (input.acceleration(Dimension.Z) > 500) {
        movement = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        movement = 0
    }
    if (movement == 0) {
        music.stopMelody(MelodyStopOptions.All)
    } else {
        soundExpression.giggle.play()
    }
})
