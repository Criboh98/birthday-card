const birthdayMessage = `Grattis på födelsedagen! ❤️

Det här kortet kommer lite i förväg eftersom jag reser bort och inte ville riskera att missa din dag.

Jag hoppas att den lilla presenten kan göra dig glad och hjälpa dig att fortsätta “bygga” din One Piece.

Jag kommer alltid att heja på dig och hoppas att du hittar det du söker.

Och du vet ju… du är il mio cielo in una stanza. 💙

Ta hand om dig, och hoppas att du får en riktigt fin födelsedag.`;



let letterIndex = 0;




// START ADVENTURE


function startAdventure(){


document
.getElementById("port")
.classList.remove("active");



document
.getElementById("mapScene")
.classList.add("active");



}







// ROUTE CHOICE


function chooseRoute(route){


let message =
document.getElementById("routeMessage");




if(route === "storm"){


message.innerHTML = `

🌪️ The Storm Route

<br><br>

The waves were too strong!

<br>

Even the greatest captains must choose wisely.

<br><br>

Try another path ⚓

`;



}






if(route === "paradise"){


message.innerHTML = `

🌴 Paradise Island

<br><br>

A beautiful place...

but your treasure is still waiting.

<br><br>

The journey continues.

`;



}







if(route === "dream"){


message.innerHTML = `

⭐ The Dream Route!

<br><br>

The compass begins to glow...

<br>

The Grand Line has revealed your path.

`;



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








// OPEN TREASURE


function openChest(){



let chest =
document.querySelector(".treasure-chest");



chest.style.animation =
"none";



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








// LETTER EFFECT


function typeLetter(){


let box =
document.getElementById("letterText");



if(letterIndex < birthdayMessage.length){


box.innerHTML +=
birthdayMessage.charAt(letterIndex);



letterIndex++;



setTimeout(

typeLetter,

45

);



}

else{


setTimeout(()=>{


showEnding();


},6000);



}


}








// END


function showEnding(){



document
.getElementById("letterScene")
.classList.remove("active");



document
.getElementById("endingScene")
.classList.add("active");



}
