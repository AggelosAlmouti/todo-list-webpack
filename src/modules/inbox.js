export default function inbox() {
    const page = document.createElement('div');
    page.classList = 'page';

    const title = document.createElement('h1');
    title.innerHTML = 'Inbox';
    page.appendChild(title);
    // const add_task = document.querySelector('.add_task');
    // add_task.src = add_icon;
    return page;
};