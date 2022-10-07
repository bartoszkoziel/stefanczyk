$(document).ready(function () {
    let lps = ["lp", "cena", "produkt"]
    let ceny = ["5,60", "3,23", "7,45", "10,00", "3,20"]
    let produkty = ["chleb", "mąka", "masło", "kefir", "dżem"]

    let height = ceny.length + 2
    let width = lps.length


    let wiersz = $("<tr>")

    for (let i = 0; i < width; i++) {
        wiersz.append($('<td>')
            .html(lps[i])
            .css("border", "1px solid black"))
    }
    $('#tabela').append(wiersz)


    for (let i = 1; i < height; i++) {
        wiersz = $("<tr>")

        if (i == 6) {
            let suma = 0
            for (let n = 0; n < ceny.length; n++) {
                suma = suma + parseFloat(ceny[n].replace(',', '.'))
                console.log(ceny[n])
            }

            wiersz.append($('<td>')
                .html("SUMA: ")
                .css("border", "1px solid black"))

            wiersz.append($('<td>')
                .html(suma)
                .css("border", "1px solid black")
                .attr("colspan", "2"))
        }

        else {
            wiersz.append($('<td>')
                .html(i)
                .css("border", "1px solid black"))

            wiersz.append($('<td>')
                .html(ceny[i - 1])
                .css("border", "1px solid black"))

            wiersz.append($('<td>')
                .html(produkty[i - 1])
                .css("border", "1px solid black"))
        }
        $('#tabela').append(wiersz)
    }
})