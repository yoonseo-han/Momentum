const API_KEY = "93b01e7d4f2378f6c818a5dc686539c9";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    //Using fetch, you do not have to go to url, but js will call url
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");      
            cityContainer.textContent = data.name;
            weatherContainer.textContent =  `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Cant find position");
}

//First argument : function called when can get position, Second : function called when can't get current position
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);