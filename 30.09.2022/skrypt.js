$(document).ready(function () {

    let tab = []

    let c1 = 0
    let c2 = 0

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            var cube = $('<div>')
            cube.addClass('cube')
            cube.css('left', j * 100 + 'px')
            cube.css('top', i * 100 + 'px')
            cube.on("click", function () {
                $(this).css('background-color', 'yellow')
                let posx = $(this).css('left')
                let posy = $(this).css('top')
                let newPosObj = { x: posx, y: posy }
                tab.push(newPosObj)
                console.table(tab)
            })
            $(".container").append(cube)
        }
    }

    $("#btnStart").on("click", function () {
        if (tab.length >= 3) {
            $("#ball1").css('left', tab[0].x)
            $("#ball1").css('top', tab[0].y)

            $("#ball2").css('left', tab[tab.length - 1].x)
            $("#ball2").css('top', tab[tab.length - 1].y)

            c1++
            c2++
        }
        else {
            alert("za krotka tablica :c")
        }
    })

    $("#btnNext").on("click", function () {
        if (c1 == c2) {
            $("#ball1").css('left', tab[0 + c1].x)
            $("#ball1").css('top', tab[0 + c1].y)
            c1++
        }

        else if (c1 > c2) {
            $("#ball2").css('left', tab[tab.length - 1 - c2].x)
            $("#ball2").css('top', tab[tab.length - 1 - c2].y)
            c2++
        }
    })

    $("#btnReset").on("click", function () {
        location.reload()
    })
})