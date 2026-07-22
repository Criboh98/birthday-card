// ===============================
// CAPTAIN ELI - THE LILY ADVENTURE
// ===============================


const birthdayMessage = `Grattis på födelsedagen! ❤️

Det här kortet kommer lite i förväg eftersom jag reser bort och inte ville riskera att missa din dag.

Jag hoppas att den lilla presenten kan göra dig glad och hjälpa dig att fortsätta “bygga” din One Piece.

Jag kommer alltid att heja på dig och hoppas att du hittar det du söker.

Och du vet ju… du är il mio cielo in una stanza. 💙

Ta hand om dig, och hoppas att du får en riktigt fin födelsedag.`;



let letterPosition = 0;

let foundThings = 0;

let gameStarted = false;






// ===============================
// INTRO
// ===============================


function startIntro(){


let ocean =
document.getElementById("oceanSound");


let music =
document.getElementById("adventureMusic");



if(ocean){

ocean.volume=.4;

ocean.play();

}



setTimeout(()=>{


document
.getElementById("intro")
.classList.remove("active");



document
.getElementById("wanted")
.classList.add("active");



},1500);



}







// ===============================
// WANTED
// ===============================


function openPort(){


document
.getElementById("wanted")
.classList.remove("active");


document
.getElementById("port")
.classList.add("active");


}








// ===============================
// CREW
// ===============================


function talk(person){


let box =
document.getElementById("dialogue");



let messages={


nova:

"🏴‍☠️ Captain Nova: Every dream begins with someone brave enough to chase it.",


mira:

"🧭 Mira: The ocean is endless, but every dream has a path.",


kaito:

"🔨 Kaito: Great things are built piece by piece.",


luna:

"🍖 Luna: The greatest treasures are the memories we make."



};



box.innerHTML =
messages[person];


}









// ===============================
// OBJECT DISCOVERY
// ===============================


function discover(item){


let box =
document.getElementById("dialogue");


foundThings++;




if(item==="compass"){


box.innerHTML=

"🧭 The compass glows... The Lily has found a direction.";


}




if(item==="map"){


box.innerHTML=

"🗺️ An old map reveals a hidden route through the Grand Line.";


}





if(item==="telescope"){


box.innerHTML=

"🔭 A mysterious island appears beyond the waves.";


}





if(item==="ship"){


box.innerHTML=

"⛵ This is The Lily. She is waiting for her captain.";


}




}








// ===============================
// START VOYAGE
// ===============================



function beginVoyage(){



document
.getElementById("port")
.classList.remove("active");



document
.getElementById("game")
.classList.add("active");



startGame();


}







// ===============================
// MINI GAME
// ===============================



function startGame(){


let ship =
document.getElementById("playerShip");


let island =
document.getElementById("treasureIsland");


setTimeout(()=>{


document
.getElementById("game")
.classList.remove("active");



document
.getElementById("treasure")
.classList.add("active");



},6000);



}









// ===============================
// TREASURE
// ===============================



function openTreasure(){


let sound =
document.getElementById("treasureSound");


if(sound){

sound.play();

}




document.querySelector(".chest")
.innerHTML="✨💎✨";



setTimeout(()=>{


document
.getElementById("treasure")
.classList.remove("active");


document
.getElementById("letter")
.classList.add("active");



typeLetter();


},2000);



}








// ===============================
// LETTER
// ===============================



function typeLetter(){


let text =
document.getElementById("letterText");



if(letterPosition < birthdayMessage.length){


text.innerHTML +=

birthdayMessage.charAt(letterPosition);



letterPosition++;


setTimeout(typeLetter,45);


}

else{


setTimeout(()=>{


showEnding();


},7000);


}


}








// ===============================
// ENDING
// ===============================



function showEnding(){


document
.getElementById("letter")
.classList.remove("active");



document
.getElementById("ending")
.classList.add("active");


}
