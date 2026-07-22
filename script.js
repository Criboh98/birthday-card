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


    const introScene =
    document.getElementById("introScene");


    const harborScene =
    document.getElementById("harborScene");



    let progress = 0;



    // =========================
    // LOADING SEQUENCE
    // =========================


    const loadingMessages = [

        "Preparing the ship...",

        "Raising the sails...",

        "Gathering the crew...",

        "Charting the seas...",

        "The Lily is ready..."

    ];



    const loading = setInterval(() => {


        progress += 20;


        loadingProgress.style.width =
        progress + "%";



        loadingText.innerText =
        loadingMessages[
        Math.floor(progress / 20)-1
        ];



        if(progress >= 100){


            clearInterval(loading);


            setTimeout(()=>{


                loadingScreen.style.opacity="0";


                setTimeout(()=>{


                    loadingScreen.style.display="none";


                },1000);


            },800);


        }



    },700);






    // =========================
    // SCENE SYSTEM
    // =========================


    function changeScene(scene){


        document
        .querySelectorAll(".scene")
        .forEach(s=>{

            s.classList.remove("active");

        });



        scene.classList.add("active");

    }







    // =========================
    // START ADVENTURE
    // =========================


    startButton.addEventListener("click",()=>{


        startButton.innerHTML =
        "⛵ Sailing to Harbor...";



        setTimeout(()=>{


            changeScene(harborScene);


        },1500);



    });







    // =========================
    // HARBOR BUTTON
    // =========================


    meetCrewButton.addEventListener("click",()=>{


        alert(
        "🏴‍☠️ The crew awaits...\n\nCaptain Nova, Mira, Kaito and Luna will join the adventure soon!"
        );


    });






    // =========================
    // LITTLE AMBIENT EFFECTS
    // =========================


    function createSparkle(){


        const sparkle =
        document.createElement("div");


        sparkle.className="sparkle";


        sparkle.style.left =
        Math.random()*100+"%";


        sparkle.style.top =
        Math.random()*100+"%";



        document.body.appendChild(sparkle);



        setTimeout(()=>{


            sparkle.remove();


        },3000);



    }




    setInterval(createSparkle,1200);



});
