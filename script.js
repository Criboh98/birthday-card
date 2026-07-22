document.addEventListener("DOMContentLoaded",()=>{


// =====================
// SCENE SYSTEM
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


let shipParts=0;

let map1=false;

let map2=false;

let bird=false;

let lantern=false;

let flower=false;







// =====================
// LOADING
// =====================


let progress=0;


let loading=setInterval(()=>{


progress+=20;


document.getElementById("loadingProgress").style.width=
progress+"%";


if(progress>=100){

clearInterval(loading);


setTimeout(()=>{

document.getElementById("loadingScreen").style.display="none";

},800);


}


},400);







// =====================
// INVENTORY
// =====================


const inventoryList=
document.getElementById("inventoryList");



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




document
.getElementById("inventoryButton")
.addEventListener("click",()=>{


let panel=
document.getElementById("inventoryPanel");


panel.style.display=
panel.style.display==="block"
?
"none"
:
"block";


});








// =====================
// MESSAGE SYSTEM
// =====================


function message(title,text){


document.getElementById("messageTitle").innerText=title;


document.getElementById("messageText").innerHTML=text;


document.getElementById("messageBox")
.style.display="block";


}



document
.getElementById("closeMessage")
.addEventListener("click",()=>{


document.getElementById("messageBox")
.style.display="none";


});









// =====================
// INTRO
// =====================


document
.getElementById("startButton")
.addEventListener("click",()=>{


changeScene("harborScene");


});









// =====================
// HARBOR QUEST
// =====================



document
.getElementById("crate")
.addEventListener("click",()=>{


if(!inventory.includes("Ship Supplies")){


addItem("Ship Supplies");

shipParts++;


message(
"📦 Supplies Found",
"The Lily has received new supplies."
);


checkShip();


}


});







document
.getElementById("wheel")
.addEventListener("click",()=>{


if(!inventory.includes("Captain's Helm")){


addItem("Captain's Helm");


shipParts++;


message(
"⚓ Helm Repaired",
"The Lily can now follow Captain Eli's command."
);


checkShip();


}


});







document
.getElementById("mapClue")
.addEventListener("click",()=>{


if(!inventory.includes("Captain's Map")){


addItem("Captain's Map");


shipParts++;


message(
"🗺️ Hidden Map",
"A mysterious route appears on the map."
);


checkShip();


}


});







function checkShip(){


if(shipParts===3){


document.getElementById("questShip")
.innerHTML="☑ Prepare The Lily";


document.getElementById("meetCrewButton")
.style.display="block";


}


}









// =====================
// CREW
// =====================



document
.getElementById("meetCrewButton")
.addEventListener("click",()=>{


changeScene("crewScene");


document.getElementById("questCrew")
.innerHTML=
"☑ Gather The Crew";


});







const dialogues={


nova:

"Captain Eli, remember this:<br><br>A true voyage is not measured by how quickly you reach the island.<br><br>Sometimes the greatest treasures are found after the longest journeys.",



mira:

"I will guide The Lily through unknown waters.<br><br>Every map hides a story waiting to be discovered.",



kaito:

"Every island has secrets.<br><br>A true explorer never stops searching.",



luna:

"The sea is strange, Captain Eli.<br><br>Sometimes two ships sail apart for a while...<br><br>but the same stars can guide them home again."

};



Object.keys(dialogues)
.forEach(name=>{


document
.getElementById(name)
.addEventListener("click",()=>{


document.getElementById("characterName")
.innerHTML=name;


document.getElementById("dialogueText")
.innerHTML=dialogues[name];


});


});






document
.getElementById("continueAdventure")
.addEventListener("click",()=>{


changeScene("mapScene");


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
// SKONDAL PUZZLE
// =====================


document
.getElementById("treeSearch")
.addEventListener("click",()=>{


if(!map1){


map1=true;


addItem("Map Piece #1");


document.getElementById("questMap1")
.innerHTML=
"☑ Recover Map Piece #1";


document.getElementById("questPorto")
.innerHTML=
"☑ Discover Porto Badisco";


document.getElementById("portoButton")
.disabled=false;


message(
"🏝️ Sköndal Complete",
"The first map piece has been found!"
);


changeScene("mapScene");


}


});







document
.getElementById("stoneSearch")
.addEventListener("click",()=>{


message(
"🪨 Old Stone",
"The wind whispers: Not here..."
);


});



document
.getElementById("windSearch")
.addEventListener("click",()=>{


message(
"🌊 Wind Shrine",
"The island tells you to look deeper..."
);


});








// =====================
// PORTO PUZZLE
// =====================


let symbols=[];



function symbol(name){


symbols.push(name);


if(symbols.length===3){


if(
symbols[0]=="star" &&
symbols[1]=="moon" &&
symbols[2]=="sea"
){


map2=true;


addItem("Map Piece #2");


document.getElementById("questMap2")
.innerHTML=
"☑ Recover Map Piece #2";


document.getElementById("hokarangenButton")
.disabled=false;


message(
"🌊 Porto Badisco Complete",
"The second map piece is yours!"
);


changeScene("mapScene");


}
else{


symbols=[];


message(
"❌ Wrong Order",
"The ancient code resets."
);


}


}


}



document
.getElementById("starButton")
.onclick=()=>symbol("star");


document
.getElementById("moonButton")
.onclick=()=>symbol("moon");


document
.getElementById("seaButton")
.onclick=()=>symbol("sea");









// =====================
// FINAL ISLAND
// =====================



document
.getElementById("birdQuest")
.onclick=()=>{


bird=true;


addItem("Feather of Hope");


};



document
.getElementById("lanternQuest")
.onclick=()=>{


lantern=true;


addItem("Guiding Light");


};



document
.getElementById("flowerQuest")
.onclick=()=>{


flower=true;


addItem("Bloom of Friendship");


};






document
.getElementById("openTreasure")
.onclick=()=>{


if(bird&&lantern&&flower){


document.getElementById("questTreasure")
.innerHTML=
"☑ Discover Eternal Happiness";


changeScene("treasureScene");


}
else{


message(
"✨ Hökarängen",
"The island asks for kindness first."
);


}


};







// =====================
// LETTER
// =====================



document
.getElementById("birthdayButton")
.onclick=()=>{


changeScene("letterScene");


};

// =====================
// FORCE HARBOR COMPLETION FIX
// =====================

function checkHarborReady(){

if(
inventory.includes("Ship Supplies") &&
inventory.includes("Captain's Helm") &&
inventory.includes("Captain's Map")
){

document.getElementById("questShip").innerHTML =
"☑ Prepare The Lily";


document.getElementById("meetCrewButton").style.display =
"block";


message(
"⚓ The Lily Is Ready!",
"All preparations are complete.<br><br>Captain Eli, the crew awaits your command."
);

}

}


const oldAddItem = addItem;


addItem=function(item){

oldAddItem(item);

checkHarborReady();

};


});
