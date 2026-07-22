const birthdayMessage = `Grattis på födelsedagen! ❤️

Det här kortet kommer lite i förväg eftersom jag reser bort och inte ville riskera att missa din dag.

Jag hoppas att den lilla presenten kan göra dig glad och hjälpa dig att fortsätta “bygga” din One Piece.

Jag kommer alltid att heja på dig och hoppas att du hittar det du söker.

Och du vet ju… du är il mio cielo in una stanza. 💙

Ta hand om dig, och hoppas att du får en riktigt fin födelsedag.`;



let discoveries = 0;

let letterIndex = 0;



// ======================
// WANTED POSTER
// ======================


function openPort(){


document
.getElementById("wanted")
.classList.remove("active");


document
.getElementById("port")
.classList.add("active");


}






// ======================
// CREW DIALOGUE
// ======================


function talk(person){


let dialogue =
document.getElementById("dialogue");



if(person === "nova"){


dialogue.innerHTML =

"🏴‍☠️ Captain Nova: Every great adventure begins with one brave step.";


}



if(person === "mira"){


dialogue.innerHTML =

"🧭 Mira: The ocean is huge, but every dream has a direction.";


}



if(person === "kaito"){


dialogue.innerHTML =

"🔨 Kaito: A great ship is built piece by piece... just like a dream.";


}



if(person === "luna"){


dialogue.innerHTML =

"🍖 Luna: Never forget to enjoy the journey, Captain!";


}



}








// ======================
// PORT OBJECTS
// ======================


function discover(object){


let dialogue =
document.getElementById("dialogue");



discoveries++;



if(object === "telescope"){


dialogue.innerHTML =

"🔭 You see a mysterious island beyond the waves...";


}




if(object === "compass"){


dialogue.innerHTML =

"🧭 The compass reacts to your dream...";


}




if(object === "chest"){


dialogue.innerHTML =

"📦 An old treasure chest. Someone left a message here...";


}




if(object === "map"){


dialogue.innerHTML =

"🗺️ An ancient map reveals a path through the Grand Line.";


}





if(discoveries >= 3){


document
.getElementById("startButton")
.disabled=false;


dialogue.innerHTML +=

"<br><br>✨ The crew is ready. The voyage can begin!";


}



}








// ======================
// START VOYAGE
// ======================



function startAdventure(){


document
.getElementById("port")
.classList.remove("active");



document
.getElementById("mapScene")
.classList.add("active");



}








// ======================
// GRAND LINE ROUTES
// ======================


function chooseRoute(route){


let message =
document.getElementById("routeMessage");



if(route==="storm"){


message.innerHTML =

"🌪️ The storm was too strong! Even legends must choose wisely.";


}




if(route==="paradise"){


message.innerHTML =

"🌴 A beautiful island... but your treasure lies somewhere else.";


}





if(route==="dream"){


message.innerHTML =

"⭐ The Dream Route! The compass has found your destiny.";



setTimeout(()=>{


document
.getElementById("mapScene")
.classList.remove("active");


document
.getElementById("treasureScene")
.classList.add("active");


},2500);



}



}








// ======================
// TREASURE
// ======================


function openChest(){


let chest =
document.querySelector(".big-chest");



chest.innerHTML="✨📦✨";



setTimeout(()=>{


document
.getElementById("treasureScene")
.classList.remove("active");


document
.getElementById("letterScene")
.classList.add("active");



typeLetter();



},1500);



}








// ======================
// LETTER
// ======================



function typeLetter(){


let box =
document.getElementById("letterText");



if(letterIndex < birthdayMessage.length){


box.innerHTML +=

birthdayMessage.charAt(letterIndex);



letterIndex++;


setTimeout(typeLetter,45);


}

else{


setTimeout(()=>{


showEnding();


},7000);


}



}







// ======================
// FINAL SCENE
// ======================



function showEnding(){


document
.getElementById("letterScene")
.classList.remove("active");


document
.getElementById("endingScene")
.classList.add("active");



}
