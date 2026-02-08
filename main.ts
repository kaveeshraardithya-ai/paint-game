input.onPinPressed(TouchPin.P0, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onPinPressed(TouchPin.P2, function () {
    turtle.pen(TurtlePenMode.Up)
})
input.onButtonPressed(Button.AB, function () {
    turtle.forward(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onPinPressed(TouchPin.P1, function () {
    turtle.pen(TurtlePenMode.Down)
})
