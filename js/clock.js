const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //.padStart() converts the string object to fit the number of letters to the 1st number input with the string in 2nd argument, infront of the string
    //Only applies to string therefore has to convert string to integer
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}


//Set interval function : function that repeats the function in first argument for a certain amount of interval, specified in the 2nd interval
//getCLock is immediately called to show the time directly when page is refreshed (without delay of 1s)
getClock();
setInterval(getClock, 1000);
