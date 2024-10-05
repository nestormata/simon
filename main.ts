let jugador: number[] = []
let posicion = 0
let list: number[] = []
let acerto = 0
input.onButtonPressed(Button.A, function () {
    jugador[posicion] = 0
    posicion += 1
})
input.onButtonPressed(Button.B, function () {
    jugador[posicion] = 1
    posicion += 1
})
basic.forever(function () {
    posicion = 0
    list = [randint(0, 1), randint(0, 1), randint(0, 1)]
    jugador = [0, 0, 0]
    for (let index = 0; index <= list.length - 1; index++) {
        if (list[index] == 0) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        }
        if (index < list.length - 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
    }
    while (posicion < list.length) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
    }
    acerto = 1
    for (let index = 0; index <= list.length - 1; index++) {
        if (list[index] != jugador[index]) {
            acerto = 0
        }
    }
    if (acerto == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    basic.pause(2000)
})
