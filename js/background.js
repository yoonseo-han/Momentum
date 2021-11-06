const images = ["background.jpeg", "hkust.jpg", "stanford_ms.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//Inset html img tag using JS

//create tag using createElement function
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//Add the made tag into html page
//document.body.appendChild(bgImage);
//document.body.style.backgroundImage = ("img/background.jpeg");