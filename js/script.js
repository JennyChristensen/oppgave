// en liten CRUD webapp
// c - create (an entry)
// r - read (an entry)
// u - update (an entry)
// d - delete (an entry)

// gjøremålliste (eller todolist)

//array (en liste med gjøremål)
let todolist = []

// create a todoitem and adds it to the todolist array
function createTodo (todoitem) {
    todolist.push(todoitem)
}

//reads one or more todolist items
// if called with number as argument, read the todoitem at the given number index from the array
// in all other cases, print the entire todolist array
function readTodo (index) {

    // chekc if index is a number greater or equal to 0
    if (index >= 0) {
       return todolist [index]
    }
    else { // in all other cases, print out the enitre todolist array
       return todolist
    }
}


//delete all todolist items
function deleteAllTodos () {
    todolist = []
}

// get the todolist iten tag from the webpage
let todolistContainer = document.querySelector("#todolist-items")

function renderTodolist () {

//empty the todolistContainer
todolistContainer.innerHTML = ""
    for (let index = 0; index < todolist.length; index = index + 1) {
    //console.log(todolist[index])
    todolistContainer.innerHTML += `<li>${readTodo(index)}</li>`
    }

}

renderTodolist()



// add todo input filed, and button
/* 
<input type="text" name="" id="input-todo-text" placeholder="enter your todo">
<button id=""button-add-todo">Add todo</button>
*/

let inputTodoText = document.querySelector ("#input-todo-text")

let buttonAddTodo = document.querySelector ("#button-add-todo")

let buttonClearTodoList = document.querySelector("#button-clear-todolist")

// add todo event handler function will do a few things
// #1 read text from the input-todo-text input
function handleAddTodoClick () {
    console.log (inputTodoText.value)

    createTodo(inputTodoText.value)
    //clear the input field
    inputTodoText.value = ""
    renderTodolist()
}

buttonAddTodo.addEventListener("click", handleAddTodoClick)


function handleClearTodoListClick () {
    deleteAllTodos ()
    renderTodolist ()
}
buttonClearTodoList.addEventListener("click", handleClearTodoListClick)



function handleAddTodoEnterKey () {
    console.log (inputTodoText.value)
}
inputTodoText.addEventListener("keydown",handleAddTodoEnterKey)

