document.addEventListener("DOMContentLoaded", () => {


const loadingScreen =
document.getElementById("loadingScreen");

const loadingProgress =
document.getElementById("loadingProgress");

const loadingText =
document.getElementById("loadingText");


const startButton =
document.getElementById("startButton");


const meetCrewButton =
document.getElementById("meetCrewButton");


const questButton =
document.getElementById("questButton");


const scenes =
document.querySelectorAll(".scene");



function changeScene(scene){

    scenes.forEach(s=>{
        s.classList.remove("active");
    });

    scene.classList.add("active");

}






// =========================
// LOADING SCREEN
// =========================


let progress = 0;


const messages = [

"Preparing the ship...",

"Raising the sails...",

"Gathering the crew...",

"Finding the treasure map...",

"The Lily is ready..."

];



const loadingTimer = setInterval(()=>{


progress += 20;


loadingProgress.style.width =
progress + "%";


loadingText.innerText =
messages[(progress/20)-1];



if(progress >= 100){


clearInterval(loadingTimer);


setTimeout(()=>{


loadingScreen.style.opacity="0";


setTimeout(()=>{

loadingScreen.style.display="none";

},1000);


},500);


}


},700);









// =========================
// START ADVENTURE
// =========================


startButton.addEventListener("click",()=>{


startButton.innerHTML =
"⛵ Sailing...";


setTimeout(()=>{


changeScene(
document.getElementById("harborScene")
);


},1500);


});









// =========================
// MEET CREW
// =========================


meetCrewButton.addEventListener("click",()=>{


changeScene(
document.getElementById("crewScene")
);


});









// =========================
// CREW RPG DIALOGUE
// =========================



const nameBox =
document.getElementById("characterName");


const dialogueBox =
document.getElementById("dialogueText");




const crewData = {


nova:{

name:"Captain Nova",

text:
"Welcome aboard, Captain Eli. The Lily has been waiting for its new captain."

},


mira:{

name:"Mira",

text:
"I prepared the supplies. Every great voyage needs a careful planner."

},


kaito:{

name:"Kaito",

text:
"I found a clue about the lost treasure map. Something is hidden beyond the sea."

},


luna:{

name:"Luna",

text:
"Adventure awaits! But first... I hope someone packed snacks."

}


};






function showCharacter(character){



const data =
crewData[character];



nameBox.innerText =
data.name;


dialogueBox.innerText =
data.text;





document.querySelectorAll(".crewPortrait")
.forEach(p=>{

p.classList.remove("selected");

});



document.getElementById(character)
.classList.add("selected");

}





document.querySelectorAll(".crewPortrait")
.forEach(member=>{


member.addEventListener("click",()=>{


showCharacter(member.id);


});


});






// First greeting

setTimeout(()=>{


showCharacter("nova");


},500);









// =========================
// QUEST
// =========================


questButton.addEventListener("click",()=>{


alert(

"🗺️ Treasure Quest Started!\n\nFind the lost map of The Lily."

);


});



});
