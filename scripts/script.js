'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let toDoData = [
    
];

const render = function () {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    toDoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        
        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function () {
            
            li.style.display = 'none';
            localStorage.removeItem('newTodo', JSON.stringify('newTodo'));
            
            
            
        });

    });
        
      
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    if (headerInput.value.trim() !== '') {
        
    
    const newTodo = {
        value: headerInput.value,
        completed: false
    };
        toDoData.push(newTodo);
        render();
        headerInput.value = ''; 
        localStorage.setItem('newTodo', JSON.stringify(newTodo));
    }
    
    
    
    // const newTodoArr = [];
    // for (let i in newTodo) {
    //     if (newTodo.hasOwnProperty(i)) {
    //        newTodoArr.push(i); 
    //     }
    // }

    
    
    
      
});
const getLocalStorage = function () {
    toDoData.item = JSON.parse(localStorage.getItem('newTodo'));
    render();
    
};
getLocalStorage();
render();