import css from './style.css';

import today_icon from './icons/today.svg';
import inbox_icon from './icons/inbox.svg';
import projects_icon from './icons/keyboard.svg';
import archive_icon from './icons/archive.svg';
import expand_icon from './icons/expand.svg';
import add_icon from './icons/add.svg';

import today from './modules/today';
import inbox from './modules/inbox';
import projects from './modules/projects';
import archive from './modules/archive';
import createTask from './modules/todo';

//icons
const option = document.querySelectorAll('.option_icon');
option[0].src = today_icon;
option[1].src = inbox_icon;
option[2].src = projects_icon;
option[3].src = archive_icon;

const projects_expand = document.querySelector('.projects_expand');
projects_expand.src = expand_icon;

//media query for screen width
const nav = document.querySelector('nav');
const pages = document.querySelector('.pages');
const optionName = document.querySelectorAll('nav .option p');

//check if page loads on desktop first
if (document.body.clientWidth >= 768) {
    optionName.forEach(e => {
        e.style.display = 'contents';
    });
};

window.addEventListener('resize', function () {
    if (document.body.clientWidth >= 768) {
        optionName.forEach(e => {
            e.style.display = 'contents';
        });
    } else {
        if (document.body.clientWidth < 768) {
            optionName.forEach(e => {
                e.style.display = 'none';
            });
        };
    };
});

nav.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.display = 'contents';
        });
    };
});

pages.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.display = 'none';
        });
    }
});

//tab browsing
pages.appendChild(today());

const today_option = document.querySelector('.today');
today_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild(today());
});

const inbox_option = document.querySelector('.inbox');
inbox_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild(inbox());
});

const archive_option = document.querySelector('.archive');
archive_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild(archive());
});

//render tasks
// const task_section = document.querySelector('.task_section');
// const task = createTask('test', 'lorem impsum sin dolor');
// task_section.appendChild(task.render());