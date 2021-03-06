'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const toDoData = [] || localStorage.getItem('newTodo');

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
            localStorage.setItem('newTodo', JSON.stringify(toDoData));
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function () {
            
            li.style.display = 'none';
            toDoData.splice(item,1);
            localStorage.setItem('newTodo', JSON.stringify(toDoData));
            render(); 
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
        headerInput.value = '';
        localStorage.setItem('newTodo', JSON.stringify(toDoData));
        render();
    }
});
    

render();



