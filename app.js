var list = document.getElementById("list")

function addTodo(){
   var  todo_items = document.getElementById("todo-items")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_items.value)
    
    li.appendChild(liText)
    list.appendChild(li)
    todo_items.value = ""
    var delBtan = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtan.setAttribute("class","btan")
    delBtan.setAttribute("onclick","DeleteElement(this)")
    delBtan.appendChild(delText)
    li.setAttribute("class","styling")
   

// edit button creation
var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.appendChild(editText)

editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtan)
    li.appendChild(editBtn)

    list.appendChild(li)

}
function DeleteElement(e){
    e.parentNode.remove()

}
function editItem(g){
 var  val = g.parentNode.firstChild.nodeValue;
 var editValue = prompt("Upadte your text",val)

 g.parentNode.firstChild.nodeValue = editValue
}
function deleteAll(){
    list.innerHTML=""
}