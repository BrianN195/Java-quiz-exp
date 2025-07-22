const textarea = document.getElementById("CardName")
const card = document.querySelector(".card")
const back = document.getElementById ("back")


function checkContent () {
if (textarea.value === "Blue Eyes White Dragon") {
    back.src = "./pics/blue.jpg"
}
}
