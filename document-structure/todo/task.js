const input = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');

form.addEventListener('submit', event => {
    event.preventDefault();

    const divTask = document.createElement('div');
    tasksList.appendChild(divTask);
    divTask.classList.add('task');

    let divTitle = document.createElement('div');
    divTask.appendChild(divTitle);
    divTitle.classList.add('task__title');
    divTitle.innerText = input.value;
    
    divTask.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
    
    let remove = divTask.querySelector(".task__remove");
    remove.addEventListener("click", event => {
        divTask.remove();
    });

    form.reset();

});