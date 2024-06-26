import add_icon from '../icons/add.svg';
import tag_icon from '../icons/tag.svg';
import tag_icon_orange from '../icons/tag_orange.svg';
import tag_icon_red from '../icons/tag_red.svg';

import createTask from './new_todo';
import { v4 as uuidv4 } from 'uuid';


function save(id, content, date, priority, complete, project) {
    let task = { id, content, date, priority, complete, project };
    localStorage.setItem(task.id, JSON.stringify(task));
};

function retreive_all(title) {
    let tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] != 'projects') {
            let item = JSON.parse(localStorage.getItem(keys[i]));
            if (item.project == title) {
                tasks.push(JSON.parse(localStorage.getItem(keys[i])));
            };
        };
    };

    return tasks;
};

export default function today() {

    const page = document.createElement('div');
    page.classList = 'page today';

    const title = document.createElement('h1');
    title.innerHTML = 'Today';
    page.appendChild(title);

    //tasks
    const content = document.createElement('div');
    content.classList = 'page_content';
    page.appendChild(content);

    //input field and buttons
    const input_container = document.createElement('div');
    input_container.classList = 'input_container';
    content.appendChild(input_container);

    const input_field = document.createElement('textarea');
    input_field.classList = 'input_field';
    input_container.appendChild(input_field);

    const button_container = document.createElement('div');
    button_container.classList = 'button_container';
    input_container.appendChild(button_container);

    const add_btn = new Image();
    add_btn.src = add_icon;
    add_btn.classList = 'button date_btn';
    button_container.appendChild(add_btn);

    //datepicker
    const datepicker_input = document.createElement('input');
    datepicker_input.type = 'date';
    datepicker_input.classList = 'datepicker_input';
    button_container.appendChild(datepicker_input);

    //priority button
    const tag_btn = new Image();
    tag_btn.src = tag_icon;
    tag_btn.classList = 'button tag_btn';
    tag_btn.value = 0;
    tag_btn.addEventListener('click', () => {
        if (tag_btn.value == 0) {
            tag_btn.value = 1;
            tag_btn.src = tag_icon_orange;
        } else if (tag_btn.value == 1) {
            tag_btn.value = 2
            tag_btn.src = tag_icon_red;
        } else if (tag_btn.value == 2) {
            tag_btn.value = 0
            tag_btn.src = tag_icon;
        }
    });
    button_container.appendChild(tag_btn);

    //add task button
    const add_task = new Image();
    add_task.src = add_icon;
    add_task.classList = 'button add_task_btn';

    add_task.addEventListener('click', () => {
        input_container.style.height = 'fit-content';
        input_field.style.width = '100%';
        input_field.style.height = '3rem';
        input_field.style.padding = '.5rem';
        button_container.style.opacity = '1';
        input_field.focus();
    });
    page.appendChild(add_task);

    //retrieve all tasks
    let tasks = retreive_all(title.innerHTML);

    if (tasks.length !== 0) {
        for (let i = 0; i < tasks.length; i++) {
            const new_task = createTask(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority, tasks[i].complete, tasks[i].project).render();
            content.appendChild(new_task);
        };
    };

    //add new task
    add_btn.addEventListener('click', (e) => {
        if (input_field.value != '') {
            const task_id = uuidv4();
            const new_task = createTask(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML).render();
            content.appendChild(new_task);
            save(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML);

            input_field.focus();
            input_field.value = '';
        };
    });

    return page;
};