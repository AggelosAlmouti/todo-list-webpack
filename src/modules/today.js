import add_icon from '../icons/add.svg';
import createTask from './todo';

export default function today() {
    const page = document.createElement('div');
    page.classList = 'page';

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
    add_task.classList = 'add_button';
    add_task.addEventListener('click', () => {
        const task = createTask('test', 'lorem impsum sin dolor');
        content.appendChild(task.render());
    });
    page.appendChild(add_task);

    return page;
};