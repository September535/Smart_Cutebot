let State = 0
function right () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    35,
    NumberFormat.UInt8LE,
    true
    )
}
function tracking_right () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    25,
    NumberFormat.UInt8LE,
    true
    )
}
Acebott.IR_onButton(IR_Button.Left, IR_ButtonAction.Pressed, function () {
    left()
    State = 0
})
Acebott.IR_onButton(IR_Button.Number_4, IR_ButtonAction.Pressed, function () {
    State = 4
})
Acebott.IR_onButton(IR_Button.Up, IR_ButtonAction.Pressed, function () {
    front()
    State = 0
})
Acebott.IR_onButton(IR_Button.Left, IR_ButtonAction.Released, function () {
    stop()
})
function front () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    40,
    NumberFormat.UInt8LE,
    true
    )
}
function left () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    35,
    NumberFormat.UInt8LE,
    true
    )
}
function stop () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
}
function tracking () {
    if (pins.analogReadPin(AnalogPin.P0) >= 1000 && pins.analogReadPin(AnalogReadWritePin.P1) >= 1000) {
        stop()
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 300 && pins.analogReadPin(AnalogReadWritePin.P1) <= 300) {
        stop()
    }
    if (pins.analogReadPin(AnalogPin.P0) >= 300 && pins.analogReadPin(AnalogReadWritePin.P0) <= 1000) {
        if (pins.analogReadPin(AnalogReadWritePin.P1) >= 300 && pins.analogReadPin(AnalogReadWritePin.P1) <= 1000) {
            tracking_front()
        }
        if (pins.analogReadPin(AnalogReadWritePin.P1) >= 180 && pins.analogReadPin(AnalogReadWritePin.P1) <= 300) {
            tracking_right()
        }
    }
    if (pins.analogReadPin(AnalogReadWritePin.P1) >= 300 && pins.analogReadPin(AnalogReadWritePin.P1) <= 1000) {
        if (pins.analogReadPin(AnalogReadWritePin.P0) >= 300 && pins.analogReadPin(AnalogReadWritePin.P0) <= 1000) {
            tracking_front()
        }
        if (pins.analogReadPin(AnalogReadWritePin.P0) >= 180 && pins.analogReadPin(AnalogReadWritePin.P0) <= 300) {
            tracking_left()
        }
    }
}
function follow () {
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10) {
        backward()
    }
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 15 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 20) {
        stop()
    }
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 20 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 25) {
        front()
    }
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 25 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 50) {
        front()
    }
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 51) {
        stop()
    }
}
function backward () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    45,
    NumberFormat.UInt8LE,
    true
    )
}
Acebott.IR_onButton(IR_Button.Right, IR_ButtonAction.Pressed, function () {
    right()
    State = 0
})
function tracking_front () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    35,
    NumberFormat.UInt8LE,
    true
    )
}
Acebott.IR_onButton(IR_Button.Number_2, IR_ButtonAction.Pressed, function () {
    State = 2
})
function LED () {
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
}
function obstacle () {
    if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10) {
        basic.pause(200)
        stop()
        basic.pause(200)
        if (Math.randomBoolean()) {
            right()
            basic.pause(200)
        } else {
            left()
            basic.pause(200)
        }
    } else {
        front()
    }
}
function tracking_left () {
    pins.i2cWriteNumber(
    24,
    1,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    0,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    2,
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    24,
    25,
    NumberFormat.UInt8LE,
    true
    )
}
Acebott.IR_onButton(IR_Button.Up, IR_ButtonAction.Released, function () {
    stop()
})
Acebott.IR_onButton(IR_Button.Down, IR_ButtonAction.Released, function () {
    stop()
})
Acebott.IR_onButton(IR_Button.Right, IR_ButtonAction.Released, function () {
    stop()
})
Acebott.IR_onButton(IR_Button.Ok, IR_ButtonAction.Pressed, function () {
    stop()
    State = 0
})
Acebott.IR_onButton(IR_Button.Number_1, IR_ButtonAction.Pressed, function () {
    State = 1
})
Acebott.IR_onButton(IR_Button.Down, IR_ButtonAction.Pressed, function () {
    backward()
    State = 0
})
Acebott.IR_onButton(IR_Button.Number_3, IR_ButtonAction.Pressed, function () {
    State = 3
})
basic.forever(function () {
    Acebott.IRReceiver_init(DigitalPin.P11)
    if (State == 1) {
        LED()
    }
    if (State == 2) {
        tracking()
    }
    if (State == 3) {
        obstacle()
    }
    if (State == 4) {
        follow()
    }
})
