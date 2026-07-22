document.addEventListener("DOMContentLoaded",()=>{


// =====================
// SCENES
// =====================


const scenes=document.querySelectorAll(".scene");


function changeScene(id){

scenes.forEach(scene=>{
scene.classList.remove("active");
});


document.getElementById(id).classList.add("active");

}






// =====================
// GAME DATA
// =====================


let inventory=[];


let progress={

crew:false,

map1:false,

map2:false,

treasure:false

};






// =====================
// INVENTORY
// =====================


const inventoryPanel=
document.getElementById("inventoryPanel");


const inventoryList=
document.getElementById("inventoryList");


document
.getElementById("inventoryButton")
.addEventListener("click",()=>{


inventoryPanel.style.display=
inventoryPanel.style.display==="block"
?
"none"
:
"block";


});





function addItem(item){


if(!inventory.includes(item)){


inventory.push(item);


updateInventory();


}

}



function updateInventory(){


inventoryList.innerHTML="";


inventory.forEach(item=>{


let li=document.createElement("li");

li.innerHTML="✨ "+item;


inventoryList.appendChild(li);


});


}







// =====================
// LOADING
// =====================


let loading=0;


let timer=setInterval(()=>{


loading+=20;


document.getElementById("loadingProgress").style.width=
loading+"%";



if(loading>=100){


clearInterval(timer);


setTimeout(()=>{


document.getElementById("loadingScreen").style.display="none";


},800);


}


},500);









// =====================
// START
// =====================


document
.getElementById("startButton")
.addEventListener("click",()=>{


changeScene("harborScene");


});








// =====================
// CREW
// =====================


document
.getElementById("meetCrewButton")
.addEventListener("click",()=>{


changeScene("crewScene");


progress.crew=true;


document
.getElementById("questCrew")
.innerHTML=
"☑ Meet the crew";


});







const crewMessages={


nova:
"Captain Nova: The Lily is ready. Our adventure begins!",


mira:
"Mira: I will guide us through the hidden paths.",


kaito:
"Kaito: I will search for secrets across the islands.",


luna:
"Luna: Every adventure needs a little happiness!"

};



Object.keys(crewMessages)
.forEach(id=>{


document
.getElementById(id)
.addEventListener("click",()=>{


document.getElementById("characterName")
.innerText=id;


document.getElementById("dialogueText")
.innerText=
crewMessages[id];


});


});







document
.getElementById("questButton")
.addEventListener("click",()=>{


changeScene("mapScene");


});









// =====================
// HARBOR SEARCH
// =====================



document
.getElementById("mapClue")
.addEventListener("click",()=>{


document.getElementById("messageBox").style.display="block";


document.getElementById("messageText")
.innerText=
"You discovered a clue leading to Sköndal Island!";


});




document
.getElementById("closeMessage")
.addEventListener("click",()=>{


document.getElementById("messageBox")
.style.display="none";


});









// =====================
// MAP
// =====================



document
.getElementById("skondalButton")
.addEventListener("click",()=>{


changeScene("skondalScene");


});




document
.getElementById("portoButton")
.addEventListener("click",()=>{


changeScene("portoScene");


});




document
.getElementById("hokarangenButton")
.addEventListener("click",()=>{


changeScene("hokarangenScene");


});









// =====================
// ISLAND 1
// =====================


document
.getElementById("findMapOne")
.addEventListener("click",()=>{


addItem("Map Piece #1");


progress.map1=true;


document.getElementById("questMap1")
.innerHTML=
"☑ Find Map Piece #1";


document.getElementById("portoButton")
.disabled=false;



alert(
"🏝️ Sköndal complete!\nPorto Badisco unlocked!"
);



changeScene("mapScene");


});









// =====================
// ISLAND 2
// =====================


document
.getElementById("findMapTwo")
.addEventListener("click",()=>{


addItem("Map Piece #2");


progress.map2=true;


document.getElementById("questMap2")
.innerHTML=
"☑ Find Map Piece #2";


document.getElementById("hokarangenButton")
.disabled=false;



alert(
"🌊 Porto Badisco complete!\nHökarängen unlocked!"
);



changeScene("mapScene");


});









// =====================
// FINAL ISLAND
// =====================


document
.getElementById("openTreasure")
.addEventListener("click",()=>{


addItem("Eternal Happiness");


progress.treasure=true;


document.getElementById("questTreasure")
.innerHTML=
"☑ Discover Eternal Happiness";


changeScene("treasureScene");


});








// =====================
// BIRTHDAY ENDING
// =====================


document
.getElementById("birthdayButton")
.addEventListener("click",()=>{


changeScene("letterScene");


});




});
