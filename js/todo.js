const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
//Array to store the typed to dos
//Must update array when there is input -> save values in array to keep original elements when new element is pushed
let toDos =[];
let idNum=0;

const TODOS_KEY = "todos";

function saveToDos() {
    //Local storage can only save strings therefore without stringify, the input automatically is converted to individual strings
    //With stringify, the whold array, including [] will turn into a whole string
    //Therefore will store the following array as a string in storage -> ex) ["a","b","c"]
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//When button is click
//First argument gives info about click : ex) which button was clicked
//use event.target.parentElement to get info about parent tag of the button
//event.target -> HTML element that was clicked (in this case : button)
function deleteToDo(event) {
    //Now each button is linked to its parent element : list, and therefore differentiated with other buttons
    const li = event.target.parentElement;
    //For array, we do not delete elements directly in the array
    // WE create a new array and add the elements except the element that has to be deleted, and then update the toDos array to the temporary array
    //filter() function passes each element of the array to the function inside filter()
    toDos = toDos.filter((element)=> element.id!==parseInt(li.id));
    //Call saveToDos once more to update the local storage
    saveToDos();
    li.remove();
}

//Create a list of todos
function paintToDo(newToDo) {
    //Create li , span and button tag 
    const li = document.createElement("li");
    //Add ID to the li tag on HTML (give id of the element array's id)
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    //Add content of button and span
    span.innerText = newToDo.text;
    button.innerText = "❌";
    //Check if button is clicked
    button.addEventListener("click", deleteToDo);
    //Put span tag inside of li tag
    li.appendChild(span);
    li.appendChild(button);
    //Put the whole list tag inside todo-list
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 
    //Push the input to do to the storing array
    //Also push the id of the to do input
    //Array stores objects!!
    const newToDoObj = {
        text: newToDo,
        id: idNum++,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

//To keep show the typed to dos on screen
if(savedToDos) {
    //If there is stored todos, we transfer the stored string back to array again
    //USe this by using parse() in JSON
    const parsedToDos = JSON.parse(savedToDos);
    //Update the to dos array so that the original values are stored
    //When web detects more submit, it pushes elements to the updated array
    toDos = parsedToDos;
    //JS allows you to execute function for each element in array
    //Passes the info of the element of array to the function
    //For simple functions, we can use arrow function to simplify code
    //Use the paintToDo function already made to paint the to do list on screen
    parsedToDos.forEach(paintToDo);
}