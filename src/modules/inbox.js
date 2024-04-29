import createTask from './new_todo';

function retreive_all() {
    var tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        tasks.push(JSON.parse(localStorage.getItem(keys[i])));
    };

    return tasks;
};

export default function inbox() {
    const page = document.createElement('div');
    page.classList = 'page inbox';

    const title = document.createElement('h1');
    title.innerHTML = 'Inbox';
    page.appendChild(title);

    //tasks
    const content = document.createElement('div');
    content.classList = 'page_content';
    page.appendChild(content);

    //retrieve all tasks
    let tasks = retreive_all();

    if (tasks.length !== 0) {
        for (let i = 0; i < tasks.length; i++) {
            const new_task = createTask(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority, tasks[i].complete).render();
            content.appendChild(new_task);
        };
    };

    return page;
};