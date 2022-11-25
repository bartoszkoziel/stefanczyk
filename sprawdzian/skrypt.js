$(document).ready(function () {
    const tab = [
        { type: "komisariat 1 - dzielnica I", c1: "111111", c2: "f5aa00", start: 70 },
        { type: "komisariat 2 - dzielnica II", c1: "333333", c2: "f5bb00", start: 60 },
        { type: "komisariat 3 - dzielnice III i IV", c1: "555555", c2: "f5cc00", start: 50 },
        { type: "komisariat 4 - dzielnice V, VI i VII", c1: "777777", c2: "f5dd00", start: 40 },
        { type: "komisariat 5 - dzielnice VIII, IX, i XIII", c1: "999999", c2: "f5ee00", start: 50 },
        { type: "komisariat 6 - dzielnice X, XI i XII", c1: "777777", c2: "f5dd00", start: 60 },
        { type: "komisariat 7 - dzielnice XV, XVI i XVII", c1: "555555", c2: "f5cc00", start: 70 },
        { type: "komisariat 8 - dzielnice XIV i XVIII", c1: "333333", c2: "f5bb00", start: 80 },
    ]

    let trHeader = $("<tr>")
    trHeader.append("<td>KOMISARIAT</td><td>NOC</td><td>DANE O PRZESTĘPCZOŚCI</td><td>DZIEŃ</td>")
    $("#tabela").append(trHeader)

    for (let i = 0; i < tab.length; i++) {
        let trData = $("<tr>")
        trData.append("<td>" + tab[i].type + "</td>")
        trData.append("<td id=" + 'noc' + i +">" + (100 - tab[i].start) + "</td>")

        let suwak = $("<div>")
        suwak.attr('class', 'suwak')
        suwak.attr('id', 'suwak' + i)
        suwak.css("background-color", '#' + tab[i].c1)
        // $("p").css("background-color", "yellow");

        suwak.on("mousedown", function(e){
            console.log("x: "+ e.clientX)
            let minX = Math.floor($("#suwak" + i).offset().left - $(document).scrollTop())
            let position = Math.round((e.clientX - minX) / 10)
            $("#noc" + i).html(100 - position)
            $("#dzien" + i).html(position)
            $("#pilka" + i).css('left', e.clientX - minX)
            console.log(position)
        })

        let pilka = $("<div>")
        pilka.attr('class', 'pilka')
        pilka.attr('id', 'pilka' + i)
        pilka.css("background-color", '#' + tab[i].c2)
        pilka.css("left", 419 + tab[i].start + 'px')

        suwak.append(pilka)


 

        trData.append($("<td>").css("background-color", '#' + tab[i].c1).append(suwak))

        trData.append("<td id=" + 'dzien' + i +">" + (tab[i].start) + "</td>")
        $("#tabela").append(trData)
    }

    let minX = Math.floor($("#suwak" + i).offset().left - $(document).scrollTop())
    let position = Math.round((e.clientX - minX) / 10)
    pilka.css("left", e.clientX - minX)

    let sumaD = 0
    let sumaN = 0
    for(let i = 0; i < tab.length; i++){
        console.log()
        sumaD = sumaD + parseInt($("#dzien" + i).html)
        sumaN = sumaN + parseInt($("#noc" + i).html)
    }

    console.log(sumaD);
    console.log(sumaN);

    let trSuma = $("<tr>")
    let tdSuma = $("<tr>")

    tdSuma



    // $("#tabela").append("<tr><td>123</td></tr>")
})