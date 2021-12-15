var arrayId = [1, 2, 3];

let addToDo = () =>{
    const item = document.querySelector('input').value;
    const myList = document.getElementById('toDoList');

    if (!item){
        return  alert("Add text please")
    } 
    //create the <li> and set text content to the input box. 
    let newList = document.createElement('li');
    newList.textContent = item;

    //create the list button and add "Remove as text"
    const listButton = document.createElement('button');
    listButton.textContent = 'Remove';

    //create crossOff Button (doesn't delete item but highlights as complete)
    const crossButton = document.createElement('button');
    crossButton.textContent = 'Toggle/Crossoff';

    //Add list item by appending to the <ol id = "toDoList"> (assigned to "myList")
    myList.appendChild(newList);
    //Add list button and then a "cross off button" next to list item. 
    newList.appendChild(listButton);
    newList.appendChild(crossButton);

    //below adds unique id to each child element equal to its Li number (could be useful in future). 
    let list = document.getElementById("toDoList");
    let id = list.childNodes.length - 1; 
    newList.setAttribute("id", `toDo${id}` )

    
    //functions for the specific element. 
    listButton.onclick = () =>{
        myList.removeChild(newList);
    }
    crossButton.onclick = () =>{
        //adds CSS to Strikethrough the list item once clicked.
        //ternary operator to toggle the strikethrough.
        !newList.getAttribute("class") ? 
        newList.setAttribute("class", "line") : 
        newList.setAttribute("class", "");
    }
    
    document.querySelector("input").value = "";
};
