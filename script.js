const message = `
Grattis på födelsedagen! ❤️

Det här kortet kommer lite i förväg eftersom jag reser bort och inte ville riskera att missa din dag.

Jag hoppas att den lilla presenten kan göra dig glad och hjälpa dig att fortsätta “bygga” din One Piece.

Jag kommer alltid att heja på dig och hoppas att du hittar det du söker.

Och du vet ju… du är il mio cielo in una stanza. 💙

Ta hand om dig, och hoppas att du får en riktigt fin födelsedag.
`;



function openTreasure(){


    // hide intro

    document.getElementById("intro")
    .classList.remove("active");



    // show treasure

    document.getElementById("treasure")
    .classList.add("active");



    setTimeout(()=>{


        document.getElementById("treasure")
        .classList.remove("active");


        document.getElementById("letterScene")
        .classList.add("active");


        typeWriter();


    },3000);



}




let index = 0;


function typeWriter(){


    let text =
    document.getElementById("letterText");


    if(index < message.length){


        text.innerHTML += message.charAt(index);


        index++;


        setTimeout(typeWriter,35);


    }


    else{


        setTimeout(showEnding,4000);


    }


}





function showEnding(){


    document.getElementById("letterScene")
    .classList.remove("active");


    document.getElementById("ending")
    .classList.add("active");


}
