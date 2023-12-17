/*
1.Selection: Selecting elements from the DOM using getElementById.

2.Creation: Creating new elements using createElement.

3.Modification: Modifying element properties like textContent, className, and onclick.

4.Insertion: Adding new elements to the DOM using appendChild.

5.Event Handling: Handling user interactions with buttons (onclick event).

6.CSS Manipulation: Changing the style of elements based on certain conditions (adding a class for completed tasks).
*/

function addTask(){
    var taskInput=document.getElementById("taskInput");
    var taskList=document.getElementById("taskList");

    if(taskInput.value.trim()===''){
        alert('Please enter a task.');
        return;
    }

    //create a new task item
    var taskItem=document.createElement('li');
    taskItem.className='task';

    var taskText=document.createElement('span');
    taskText.textContent=taskInput.value;

    var deleteButton = document.createElement('button');
    deleteButton.textContent= 'Delete';
    deleteButton.onclick=function(){
        taskItem.remove();
    };

    var completeButton = document.createElement('button');
    completeButton.textContent='Complete';
    completeButton.onclick=function(){
        taskText.classList.toggle('completed');
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    
    taskList.appendChild(taskItem);

    //clear the input field
    taskInput.value='';
}