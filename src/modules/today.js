import { javascript } from 'webpack';
import add_icon from '../icons/add.svg';
import createTask from './todo';

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

    //add task button
    const add_task = new Image();
    add_task.src = add_icon;
    add_task.classList = 'button add_task_btn';

    const input_field = document.createElement('textarea');
    input_field.rows = '1';
    input_field.classList = 'input_field';
    input_field.maxLength = '90';
    content.appendChild(input_field);

    add_task.addEventListener('click', () => {
        input_field.style.width = '70%';
        input_field.style.height = '7rem';
        input_field.style.padding = '1rem';
    });
    page.appendChild(add_task);

    return page;
};