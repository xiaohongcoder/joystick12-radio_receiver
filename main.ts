radio.onReceivedString(function (receivedString) {
    if (receivedString == "UP") {
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "DOWN") {
        basic.showArrow(ArrowNames.South)
    } else if (receivedString == "RIGHT") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "LEFT") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "A") {
        basic.showString("A")
    } else if (receivedString == "B") {
        basic.showString("B")
    } else if (receivedString == "C") {
        basic.showString("C")
    } else if (receivedString == "D") {
        basic.showString("D")
    }
})
radio.setGroup(1)
