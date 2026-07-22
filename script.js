body {

margin:0;

height:100vh;

overflow:hidden;

background:linear-gradient(
#001d3d,
#003566,
#0077b6
);

font-family:Arial, sans-serif;

color:white;

text-align:center;

}


/* stars */

.stars {

position:absolute;

top:40px;

width:100%;

font-size:35px;

animation:sparkle 3s infinite;

}


@keyframes sparkle {

50% {

opacity:0.3;

}

}



/* content */

.container {

position:relative;

z-index:2;

padding-top:150px;

}



/* button */

button {

background:#f2c14e;

border:none;

padding:20px 40px;

font-size:20px;

border-radius:15px;

cursor:pointer;

}



/* ocean */

.ocean {

position:absolute;

bottom:0;

left:0;

font-size:70px;

width:200%;

animation:waves 5s linear infinite;

}



@keyframes waves {

from {

transform:translateX(0);

}


to {

transform:translateX(-50%);

}

}



/* letter */

#letter {

display:none;

background:#f5e6b3;

color:#5a3825;

padding:30px;

border-radius:20px;

position:absolute;

top:200px;

left:10%;

right:10%;

z-index:5;

}
