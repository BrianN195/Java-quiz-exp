const textarea = document.getElementById("CardName")
const card = document.querySelector(".card")
const back = document.getElementById ("back")


// function checkContent () {
// if (textarea.value === "Blue Eyes White Dragon") {
//     back.src = "./pics/blue.jpg"
// } else if (textarea.value === "Dark Magician") {
//     back.src = "./pics/Schwarzer_Magier.jpg"
// }
// }

// Switch ist viel angenehmer zu schreiben für mich

function checkContent () {
switch (textarea.value) {
    case "Blue Eyes White Dragon":
        back.src = "./pics/blue.jpg";
        break;
    case "Dark Magician":
        back.src = "./pics/Schwarzer_Magier.jpg";
        break;
}
}