$(document).ready(function () {
    $("#btnAdd").on("click", function () {
        $("#divMenu").empty()
        for (let i = 0; i < $("#select1").val(); i++) {
            let menuDiv = $("<div>")
                .html(i)
                .addClass("menuDiv")
                .on("click", function () {
                    this.remove()
                })
            $("#divMenu").append(menuDiv)
        }
    })
    $("#btnDel").on("click", function () {
        $("#divMenu").empty()
    })
})