input.onButtonPressed(Button.A, function () {
    loudness += 10
    music.setVolume(loudness)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
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
