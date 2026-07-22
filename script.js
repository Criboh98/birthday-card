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





// =========================
// SCENE CHANGE
// =========================


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
// QUEST SYSTEM
// =========================


function completeQuest(id){


const quest =
document.getElementById(id);


quest.innerHTML =
quest.innerHTML.replace("☐","☑");


}



function startQuest(id){


const quest =
document.getElementById(id);


quest.innerHTML =
quest.innerHTML.replace("☑","☐");


}









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
// CREW
// =========================


meetCrewButton.addEventListener("click",()=>{


changeScene(

document.getElementById("crewScene")

);



completeQuest("questCrew");



});









// =========================
// CREW DIALOGUE
// =========================


const characterName =
document.getElementById("characterName");


const dialogueText =
document.getElementById("dialogueText");





const crew = {


nova:{

name:"Captain Nova",

text:

"The Lily has been waiting for you, Captain Eli. Our adventure begins now."

},


mira:{

name:"Mira",

text:

"I prepared the supplies. A good captain always plans ahead."

},


kaito:{

name:"Kaito",

text:

"I found a clue about a lost treasure map hidden somewhere nearby."

},


luna:{

name:"Luna",

text:

"I am ready for adventure! Also... I brought snacks."

}


};






function showCrew(id){


const member =
crew[id];



characterName.innerText =
member.name;


dialogueText.innerText =
member.text;



document.querySelectorAll(".crewPortrait")
.forEach(p=>{


p.classList.remove("selected");


});



document.getElementById(id)
.classList.add("selected");


}





document.querySelectorAll(".crewPortrait")
.forEach(member=>{


member.addEventListener("click",()=>{


showCrew(member.id);


});


});





showCrew("nova");









// =========================
// TREASURE QUEST BUTTON
// =========================


questButton.addEventListener("click",()=>{


completeQuest("questHarbor");



alert(

"🗺️ Quest Started!\n\nSearch the harbor for clues about the Lost Map."

);



});






});
