export default function archive() {
    const page = document.createElement('div');
    page.classList = 'page';

    const title = document.createElement('h1');
    title.innerHTML = 'Archive';
    page.appendChild(title);
    return page;
};