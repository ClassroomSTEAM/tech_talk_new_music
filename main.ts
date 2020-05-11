input.onButtonPressed(Button.A, function () {
    loudness += 10
    music.setVolume(loudness)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    loudness += -10
    music.setVolume(loudness)
})
let loudness = 0
basic.showIcon(IconNames.Heart)
loudness = 100
music.setVolume(loudness)
basic.forever(function () {
    led.plotBarGraph(
    loudness,
    255
    )
})
