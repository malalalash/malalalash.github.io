
const addTodo = document.querySelector('.add-todo');
const inputTodo = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list');
todoList.addEventListener('click', deleteBtn);
document.addEventListener('load', loadTodos());

const newTask = addTodo.addEventListener('click', function () {
    event.preventDefault();
    if (!inputTodo.value) return;
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-container');
    newTodo.innerHTML = `<li class="todo-item">${inputTodo.value}</li><button class="btn done"><i class="fa fa-check" aria-hidden="true"></i></button>
    <button class="btn delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
    todoList.append(newTodo);
    saveLocal(inputTodo.value);
    inputTodo.value = '';
});

function deleteBtn(e) {
    const item = e.target;
    if (item.className === "btn delete") {
        const todo = item.parentElement;
        todo.classList.add('slide');
        removeTodo(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.className === "btn done") {
        const todo = item.parentElement;
        todo.classList.toggle('finished');
    }
};

function saveLocal(todo) {
    let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    items.push(todo);
    localStorage.setItem('items', JSON.stringify(items));
};

function loadTodos() {
    let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    items.forEach(function (todo) {
        if (!todo) return;
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo-container');
        newTodo.innerHTML = `<li class="todo-item">${todo}</li><button class="btn done"><i class="fa fa-check" aria-hidden="true"></i></button>
        <button class="btn delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
        todoList.append(newTodo);
    });
};

function removeTodo(todo) {
    let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    const text = todo.firstChild.innerText;
    const deleteText = items.indexOf(text);
    items.splice(deleteText, 1);
    localStorage.setItem('items', JSON.stringify(items));
};

function selectValue() {
    const option = document.getElementById('task').value;
    const todo = todoList.childNodes;
    todo.forEach(function (todo) {
        switch (option) {
            case 'All':
                todo.style.display = 'flex';
                break;
            case 'Uncompleted':
                if (todo.classList.contains('finished')) {
                    todo.style.display = 'none'
                } else {
                    todo.style.display = 'flex'
                }
                break;
            case 'Completed':
                if (todo.classList.contains('finished')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
        }
    });
}