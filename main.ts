input.onButtonPressed(Button.A, function () {
    tempo += 5
})
input.onButtonPressed(Button.B, function () {
    tempo += -5
})
let millisRechts = 0
let speedRechts = 0
let photoRechts = 0
let speedLinks = 0
let millisLinks = control.millis()
let photoLinks = 0
let tempo = 50
let motorLinks = 50
let motorRechts = 50
basic.forever(function () {
    if (JoyCar.speed(SensorLRSelection.Left)) {
        if (photoLinks == 0) {
            speedLinks = control.millis() - millisLinks
            millisLinks = control.millis()
            photoLinks = 1
        }
    } else {
        photoLinks = 0
    }
    if (JoyCar.speed(SensorLRSelection.Right)) {
        if (photoRechts == 0) {
            speedRechts = control.millis() - millisRechts
            millisRechts = control.millis()
            photoRechts = 1
        }
    } else {
        photoRechts = 0
    }
    if (speedLinks > tempo) {
        motorLinks += 1
    } else {
        motorLinks += -1
    }
    if (speedRechts > tempo) {
        motorRechts += 1
    } else {
        motorRechts += -1
    }
    if (motorLinks > 100) {
        motorLinks = 100
    }
    if (motorLinks < 0) {
        motorLinks = 0
    }
    if (motorRechts > 100) {
        motorRechts = 100
    }
    if (motorRechts < 0) {
        motorRechts = 0
    }
})
basic.forever(function () {
    control.waitMicros(50000)
    JoyCar.bias(LRDirection.Left, 0)
})
