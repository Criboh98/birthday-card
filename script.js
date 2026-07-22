const birthdayMessage = `Grattis på födelsedagen! ❤️

Det här kortet kommer lite i förväg eftersom jag reser bort och inte ville riskera att missa din dag.

Jag hoppas att den lilla presenten kan göra dig glad och hjälpa dig att fortsätta “bygga” din One Piece.

Jag kommer alltid att heja på dig och hoppas att du hittar det du söker.

Och du vet ju… du är il mio cielo in una stanza. 💙

Ta hand om dig, och hoppas att du får en riktigt fin födelsedag.`;



let letterPosition = 0;



function openTreasure(){


    let chest = document.querySelector(".chest");


    chest.classList.add("open");



    setTimeout(()=>{


        document
        .getElementById("intro")
        .classList.remove("active");



        document
        .getElementById("treasure")
        .classList.add("active");



    },800);




    setTimeout(()=>{


        document
        .getElementById("treasure")
        .classList.remove("active");



        document
        .getElementById("letterScene")
        .classList.add("active");



        startTyping();



    },3500);



}







function startTyping(){


    let textBox =
    document.getElementById("letterText");



    if(letterPosition < birthdayMessage.length){



        textBox.innerHTML += 
        birthdayMessage.charAt(letterPosition);



        letterPosition++;



        setTimeout(
            startTyping,
            40
        );



    }

    else{


        setTimeout(()=>{


            showEnding();


        },5000);


    }


}







function showEnding(){


    document
    .getElementById("letterScene")
    .classList.remove("active");



    document
    .getElementById("ending")
    .classList.add("active");



}
