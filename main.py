def on_button_pressed_a():
    global loudness
    loudness += 10
    music.set_volume(loudness)
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_ab():
    music.play_melody("C D E F G A B B5 ", 120)
input.on_button_pressed(Button.AB, on_button_pressed_ab)
def on_button_pressed_b():
    global loudness
    loudness += -10
    music.set_volume(loudness)
input.on_button_pressed(Button.B, on_button_pressed_b)
loudness = 0
basic.show_icon(IconNames.HEART)
loudness = 100
music.set_volume(loudness)
def on_forever():
    led.plot_bar_graph(loudness, 255)
basic.forever(on_forever)