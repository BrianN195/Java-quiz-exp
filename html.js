const textarea = document.getElementById("CardName")
const card = document.querySelector(".card")
const back1 = document.getElementById ("back1")
const back2 = document.getElementById ("back2")
const back3 = document.getElementById ("back3")
const back4 = document.getElementById ("back4")
const back5 = document.getElementById ("back5")
const back6 = document.getElementById ("back6")
const back7 = document.getElementById ("back7")
const back8 = document.getElementById ("back8")
const back9 = document.getElementById ("back9")
const back10 = document.getElementById ("back10")





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
        back1.src = "./pics/blue.jpg";
        break;
    case "Dark Magician":
        back2.src = "./pics/Schwarzer_Magier.jpg";
        break;
    case "Three Horned Dragon":
        back3.src = "./pics/three.jpg";
        break;
    case "Left Leg of the Forbidden":
        back4.src = "./pics/leftleg.jpg";
        break;
    case "Left Arm of the Forbidden":
        back5.src = "./pics/leftarm.jpg";
        break;
    case "Exodia the Forbidden":
        back6.src = "./pics/Exodia-die-Verbotene.jpg";
        break;
    case "Right Arm of the Forbidden":
        back7.src = "./pics/rightarm.jpg";
        break;
    case "Right Leg of the Forbidden":
        back8.src = "./pics/rightleg.jpg";
        break;
}
}