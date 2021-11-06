const loginForm = document.querySelector(".login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Have to stop refresh when submit happens(refresh is default behavior of HTML)
function onLoginSubmit(event) {
    //Prevent the default value(page refresh) of browser by using function 
    //event argument is normally automatically passed by JS. IT represents the current events that the brwoser executes autoamtically
    event.preventDefault();
    const username = loginInput.value;
    //Hide login form after input is submitted
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //Use web API to store values in local storage
    //The first argument represents the name of the variable, and second argument is the value of variable
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLinkClick(event) {
    //Following code prevents the page to move directly to the link when mouse clicks the link (default behavior)
    event.preventDefault();
}

//When a function is passed in addEventListener, JS will automatically input an argument of the function that  explains the information of current event that helps to activate function
//For example events such as when user submits information, or when clicks using a mouse : Info related to the following events are also passed

//Want to stop the submit (as submit causes the whole HTML page to refresh)
//loginForm.addEventListener("submit", onLoginSubmit);

//Default behavior of link when clicked is to go to the page: We will stop the following default behavior
link.addEventListener("click", onLinkClick);


//Want to make the program to remember username once username is typed
//If there is no username stored, show the input for,
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
    //No saved username : show input form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //Saved username exist : show greeting
    paintGreetings();
}