document.addEventListener("DOMContentLoaded", () => {


// =====================
// SCENE SYSTEM
// =====================


const scenes = document.querySelectorAll(".scene");


function changeScene(sceneID){

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });


    document
    .getElementById(sceneID)
    .classList.add("active");

}





// =====================
// GAME DATA
// =====================


let inventory = [];


let progress = {

    ship:false,

    crew:false,

    skondal:false,

    map1:false,

    porto:false,

    map2:false,

    hokarangen:false,

    treasure:false

};





// =====================
// INVENTORY SYSTEM
// =====================


const inventoryPanel =
document.getElementById("inventoryPanel");


const inventoryList =
document.getElementById("inventoryList");



document
.getElementById("inventoryButton")
.addEventListener("click",()=>{


    if(inventoryPanel.style.display==="block"){

        inventoryPanel.style.display="none";

    }

    else{

        inventoryPanel.style.display="block";

    }


});





function addItem(item){


    if(!inventory.includes(item)){


        inventory.push(item);


        updateInventory();


        showMessage(
        "You obtained:\n✨ "+item
        );


    }


}




function updateInventory(){


    inventoryList.innerHTML="";


    if(inventory.length===0){


        inventoryList.innerHTML=
        "<li>No items yet</li>";


        return;

    }



    inventory.forEach(item=>{


        let li=document.createElement("li");


        li.innerHTML=
        "✨ "+item;


        inventoryList.appendChild(li);


    });


}









// =====================
// MESSAGE SYSTEM
// =====================



function showMessage(text){


    document
    .getElementById("messageText")
    .innerText=text;



    document
    .getElementById("messageBox")
    .style.display="block";


}





document
.getElementById("closeMessage")
.addEventListener("click",()=>{


    document
    .getElementById("messageBox")
    .style.display="none";


});









// =====================
// QUEST UPDATE
// =====================



function completeQuest(id,text){


    document
    .getElementById(id)
    .innerHTML=
    "☑ "+text;


}









// =====================
// LOADING SCREEN
// =====================



let loading=0;



let loadingTimer=setInterval(()=>{


    loading+=20;



    document
    .getElementById("loadingProgress")
    .style.width=
    loading+"%";




    if(loading>=100){


        clearInterval(loadingTimer);



        setTimeout(()=>{


            document
            .getElementById("loadingScreen")
            .style.display="none";


        },800);



    }



},500);









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



let harborTasks = {

    crate:false,

    wheel:false,

    map:false

};






document
.getElementById("crate")
.addEventListener("click",()=>{


    if(!harborTasks.crate){


        harborTasks.crate=true;


        addItem("Ship Supplies");


        showMessage(
        "The supplies are loaded aboard The Lily."
        );


        checkShip();


    }


});







document
.getElementById("wheel")
.addEventListener("click",()=>{


    if(!harborTasks.wheel){


        harborTasks.wheel=true;


        addItem("Prepared Helm");


        showMessage(
        "The Lily is ready to navigate the seas."
        );


        checkShip();


    }


});







document
.getElementById("mapClue")
.addEventListener("click",()=>{


    if(!harborTasks.map){


        harborTasks.map=true;


        addItem("Captain's Note");


        showMessage(
        "The note reveals a legend about Eternal Happiness."
        );


        checkShip();


    }


});







function checkShip(){



    if(
        harborTasks.crate &&
        harborTasks.wheel &&
        harborTasks.map
    ){


        progress.ship=true;



        completeQuest(
        "questShip",
        "Prepare The Lily"
        );


        document
        .getElementById("meetCrewButton")
        .style.display="block";



        showMessage(
        "The Lily is ready to sail!\n\nMeet the crew before leaving the harbor."
        );


    }



}






// =====================
// MEET CREW
// =====================



document
.getElementById("meetCrewButton")
.addEventListener("click",()=>{


    changeScene("crewScene");


});



});
// =====================
// CREW SYSTEM
// =====================


let crewMembers = {

    nova:false,

    mira:false,

    kaito:false,

    luna:false

};






const crewDialogue = {


nova:

"Captain Nova:\n\nA great pirate is not measured by treasure, but by the dream they follow.\n\nAre you ready to chase Eternal Happiness?",



mira:

"Mira:\n\nThe sea has many paths.\nA true navigator must know where the journey begins.",



kaito:

"Kaito:\n\nThe smallest clues often reveal the biggest secrets.\nI found something near the harbor.",



luna:

"Luna:\n\nThe greatest adventures are the ones shared with people who matter."



};









// =====================
// CREW PORTRAITS
// =====================



Object.keys(crewDialogue)
.forEach(member=>{


    document
    .getElementById(member)
    .addEventListener("click",()=>{


        document
        .getElementById("characterName")
        .innerText=
        member.charAt(0).toUpperCase()+member.slice(1);



        document
        .getElementById("dialogueText")
        .innerText=
        crewDialogue[member];



    });



});









// =====================
// CREW QUESTS
// =====================



document
.getElementById("nova")
.addEventListener("click",()=>{


    if(!crewMembers.nova){


        crewMembers.nova=true;


        addItem("Captain Nova's Trust");


        showMessage(
        "Captain Nova has joined the voyage."
        );


        checkCrew();


    }


});








document
.getElementById("mira")
.addEventListener("click",()=>{


    if(!crewMembers.mira){


        let answer =
        prompt(
        "Mira's navigation test:\n\nWhere does the sun rise?\n\nEast or West?"
        );



        if(answer &&
        answer.toLowerCase()=="east"){


            crewMembers.mira=true;


            addItem("Navigator Mark");


            showMessage(
            "Correct! Mira trusts your navigation skills."
            );


            checkCrew();


        }

        else{


            showMessage(
            "The compass spins...\nTry again."
            );


        }


    }



});








document
.getElementById("kaito")
.addEventListener("click",()=>{


    if(!crewMembers.kaito){


        crewMembers.kaito=true;


        addItem("Explorer Badge");


        showMessage(
        "Kaito found an old pirate clue hidden in the harbor."
        );


        checkCrew();


    }


});








document
.getElementById("luna")
.addEventListener("click",()=>{


    if(!crewMembers.luna){


        crewMembers.luna=true;


        addItem("Friendship Charm");


        showMessage(
        "Luna reminds the crew why the journey matters."
        );


        checkCrew();


    }


});










function checkCrew(){


    if(
        crewMembers.nova &&
        crewMembers.mira &&
        crewMembers.kaito &&
        crewMembers.luna
    ){


        progress.crew=true;


        completeQuest(
        "questCrew",
        "Gather the Crew"
        );



        document
        .getElementById("questButton")
        .innerText=
        "🗺️ Set Sail";



        showMessage(
        "The crew of The Lily is complete!\n\nThe journey to Eternal Happiness begins."
        );


    }



}









// =====================
// GO TO MAP
// =====================



document
.getElementById("questButton")
.addEventListener("click",()=>{


    if(progress.crew){


        changeScene("mapScene");


    }


    else{


        showMessage(
        "Captain Eli must meet the whole crew first."
        );


    }



});









// =====================
// MAP TRAVEL
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
// SKÖNDAL ISLAND
// TRIAL OF CURIOSITY
// =====================


document
.getElementById("findTree")
.addEventListener("click",()=>{


    if(progress.map1)
    return;



    progress.map1=true;

    progress.skondal=true;


    addItem("Map Piece #1");



    completeQuest(
    "questIsland1",
    "Complete Sköndal Island Trial"
    );


    completeQuest(
    "questMap1",
    "Recover Map Piece #1"
    );



    document
    .getElementById("portoButton")
    .disabled=false;



    showMessage(
    "You searched beneath the ancient tree and discovered Map Piece #1!\n\nThe path to Porto Badisco is now revealed."
    );


    changeScene("mapScene");


});







document
.getElementById("findStone")
.addEventListener("click",()=>{


    showMessage(
    "Only an old stone...\n\nThe pirates left no treasure here."
    );


});







document
.getElementById("findAnchor")
.addEventListener("click",()=>{


    showMessage(
    "A forgotten anchor from an ancient voyage."
    );


});












// =====================
// PORTO BADISCO
// TRIAL OF WISDOM
// =====================



let portoSequence=[];




function checkPortoPuzzle(){


    let answer =
    portoSequence.join(",");



    if(answer==="star,moon,sea"){



        progress.map2=true;

        progress.porto=true;



        addItem("Map Piece #2");



        completeQuest(
        "questIsland2",
        "Complete Porto Badisco Trial"
        );


        completeQuest(
        "questMap2",
        "Recover Map Piece #2"
        );



        document
        .getElementById("hokarangenButton")
        .disabled=false;



        showMessage(
        "The ancient ruins open!\n\nYou found Map Piece #2.\n\nThe final island awaits."
        );



        changeScene("mapScene");



    }



}








document
.getElementById("starSymbol")
.addEventListener("click",()=>{


    portoSequence.push("star");

    checkPortoPuzzle();


});





document
.getElementById("moonSymbol")
.addEventListener("click",()=>{


    portoSequence.push("moon");

    checkPortoPuzzle();


});





document
.getElementById("seaSymbol")
.addEventListener("click",()=>{


    portoSequence.push("sea");

    checkPortoPuzzle();


});












// =====================
// HÖKARÄNGEN
// TRIAL OF HEART
// =====================



let kindnessTasks={


bird:false,

lantern:false,

flower:false


};







document
.getElementById("helpBird")
.addEventListener("click",()=>{


    if(!kindnessTasks.bird){


        kindnessTasks.bird=true;


        addItem("Bird Feather");


        showMessage(
        "The lost bird returns home.\n\nA small act of kindness can change everything."
        );


        checkKindness();


    }


});








document
.getElementById("lightLantern")
.addEventListener("click",()=>{


    if(!kindnessTasks.lantern){


        kindnessTasks.lantern=true;


        addItem("Lantern Light");


        showMessage(
        "The lantern shines across Hökarängen."
        );


        checkKindness();


    }


});








document
.getElementById("waterFlower")
.addEventListener("click",()=>{


    if(!kindnessTasks.flower){


        kindnessTasks.flower=true;


        addItem("Blooming Flower");


        showMessage(
        "The flower blooms once again."
        );


        checkKindness();


    }


});









function checkKindness(){


    if(

        kindnessTasks.bird &&
        kindnessTasks.lantern &&
        kindnessTasks.flower

    ){


        progress.hokarangen=true;



        completeQuest(
        "questIsland3",
        "Reach Hökarängen"
        );



        document
        .getElementById("openTreasure")
        .style.display="block";



        showMessage(
        "The island accepts you.\n\nThe treasure of The Lily awaits."
        );


    }



}












// =====================
// TREASURE
// ETERNAL HAPPINESS
// =====================



document
.getElementById("openTreasure")
.addEventListener("click",()=>{


    if(!progress.hokarangen){


        showMessage(
        "The treasure remains sealed."
        );


        return;


    }




    addItem("Eternal Happiness");



    progress.treasure=true;



    completeQuest(
    "questTreasure",
    "Discover Eternal Happiness"
    );



    changeScene("treasureScene");



});












// =====================
// BIRTHDAY LETTER
// ETERNAL LOVE
// =====================



document
.getElementById("birthdayButton")
.addEventListener("click",()=>{


    changeScene("letterScene");


});





});
