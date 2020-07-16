//ToBeatElite
const my_checkbuttons = document.getElementsByClassName("checkbutton")
const my_button = document.getElementById("start-button-button");
const my_task_list = document.getElementById("task-list")
const my_task = document.getElementById("input-task");

let i = 0

function DeleteTask(elem) {
    document.getElementById("task_" + elem.id.replace("delete_item_", "")).remove()
}   

function CompleteTask(elem) {
    if (elem.checked) {
        document.getElementById("task_text_" + elem.id.substr(12, 2)).style.textDecoration = "line-through"
    }

    else {
        document.getElementById("task_text_" + elem.id.substr(12, 2)).style.textDecoration = "none"
    }
}

function AddTask() {
   
    i = i + 1

    let my_checkbutton = document.createElement("input")
    let delete_button = document.createElement("p")
    let task_item = document.createElement("li")
    let my_text = document.createElement("p")

    task_item.setAttribute("id", "task_" + i)

    my_checkbutton.setAttribute("onclick", "CompleteTask(this)")
    my_checkbutton.setAttribute("id", "checkbutton_" + i)
    my_checkbutton.setAttribute("class", "checkbutton")
    my_checkbutton.setAttribute("type", "checkbox")

    my_text.setAttribute("id", "task_text_" + i)
    my_text.setAttribute("class", "task_text")
    my_text.innerHTML = my_task.value

    delete_button.setAttribute("onclick", "DeleteTask(this)")
    delete_button.setAttribute("id", "delete_item_" + i)
    delete_button.setAttribute("class", "delete_item")
    delete_button.innerHTML = "Delete"

    task_item.appendChild(my_checkbutton)
    task_item.appendChild(delete_button)
    task_item.appendChild(my_text)

    my_task_list.appendChild(task_item)
}

my_button.addEventListener("click", AddTask);
