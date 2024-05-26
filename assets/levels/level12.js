var indexLevel = 12;
// Level data
levels[indexLevel] = {
    width: 17,
    height: 12,
    best: 204,
    starts: [{ x: 9, y: 6 }],
    end: { x: 16, y: 6 },
    data: [
        "41111111111133333",
        "33333333333332223",
        "22222222222222323",
        "22222333333322223",
        "33333344444322233",
        "00000345554332220",
        "55555555554332225",
        "00000055554322220",
        "33333344444323233",
        "32222333333322223",
        "32322222222222223",
        "33333333333333333",
    ],
    objects: [
        [9, 5],
        [9, 6],
        [9, 7],
    ],
    triggers: [
        { x: 15, y: 10, type: 3, on: [[16, 6, -1]] },
        { x: 15, y: 9, type: 3, on: [[16, 6, -1]] },
        { x: 14, y: 9, type: 3, on: [[16, 6, -1]] },
    ],
}

// Tutorial
tuto[indexLevel] = [
]