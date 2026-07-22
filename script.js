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
// LOADING
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
// START VOYAGE
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



startCrewIntroduction();


});








// =========================
// CREW INTRODUCTION
// =========================


function startCrewIntroduction(){


const name =
document.getElementById("characterName");


const text =
document.getElementById("dialogueText");



const dialogue = [


{

name:"Captain Nova",

text:
"Welcome aboard, Captain Eli. The Lily has been waiting for its captain."

},


{

name:"Mira",

text:
"I prepared the supplies. Every great adventure needs a careful planner!"

},


{

name:"Kaito",

text:
"I discovered a clue... the lost treasure map is somewhere across the sea."

},


{

name:"Luna",

text:
"Adventure sounds great! But first... did anyone bring snacks?"

}


];



let index = 0;



function nextDialogue(){


if(index < dialogue.length){


name.innerText =
dialogue[index].name;


text.innerText =
dialogue[index].text;


index++;


}


}



nextDialogue();



setTimeout(nextDialogue,4000);

setTimeout(nextDialogue,8000);

setTimeout(nextDialogue,12000);



}








// =========================
// CREW CLICK INTERACTIONS
// =========================



const crewMembers =
document.querySelectorAll(".crewCard");



crewMembers.forEach(member=>{


member.addEventListener("click",()=>{


const name =
member.querySelector("h2").innerText;



const text =
document.getElementById("dialogueText");

const title =
document.getElementById("characterName");



title.innerText=name;



const messages={


"Captain Nova":
"The sea rewards brave captains.",


"Mira":
"The supplies are ready for the journey!",


"Kaito":
"The map hides a secret location...",


"Luna":
"I packed enough snacks for the whole voyage!"

};



text.innerText =
messages[name];



});



});








// =========================
// QUEST BUTTON
// =========================


questButton.addEventListener("click",()=>{


alert(
"🗺️ Treasure Quest Started!\n\nFind the lost map of The Lily."
);



});



});
