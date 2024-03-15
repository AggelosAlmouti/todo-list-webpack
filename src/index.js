import css from './style.css';

import today_icon from './icons/today.svg';
import inbox_icon from './icons/inbox.svg';
import projects_icon from './icons/keyboard.svg';
import archive_icon from './icons/archive.svg';
import expand_icon from './icons/expand.svg';
import collapse_icon from './icons/collapse.svg';
import add_icon from './icons/add.svg';

import today from './modules/today';
import inbox from './modules/inbox';
import projects from './modules/projects';
import archive from './modules/archive';

//icons
const option = document.querySelectorAll('.option_icon');
option[0].src = today_icon;
option[1].src = inbox_icon;
option[2].src = projects_icon;
option[3].src = archive_icon;

const projects_expand = document.querySelector('.projects_expand');
projects_expand.src = expand_icon;
const projects_collapse = document.querySelector('.projects_collapse');
projects_collapse.src = collapse_icon;
const add_project_btn = document.querySelector('nav .add_project_btn');
add_project_btn.src = add_icon;

//media query for screen width
const nav = document.querySelector('nav');
const pages = document.querySelector('.pages');
const optionName = document.querySelectorAll('nav .option p');

//check if page loads on desktop first
if (document.body.clientWidth >= 768) {
    optionName.forEach(e => {
        e.style.fontSize = '1rem';
    });
};

window.addEventListener('resize', function () {
    if (document.body.clientWidth >= 768) {
        optionName.forEach(e => {
            e.style.fontSize = '1rem';
        });
    } else {
        if (document.body.clientWidth < 768) {
            optionName.forEach(e => {
                e.style.fontSize = '0rem';
                projects_menu.style.display = 'none';
                projects_collapse.style.display = 'none';
                projects_expand.style.display = 'block';
            });
        };
    };
});

nav.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.fontSize = '1rem';
        });
    };
});

pages.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.fontSize = '0rem';
            projects_menu.style.display = 'none';
            projects_collapse.style.display = 'none';
            projects_expand.style.display = 'block';
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

const projects_option = document.querySelector('.projects');
const projects_menu = document.querySelector('.projects_menu');
projects_option.addEventListener('click', () => {
    if (projects_menu.style.display == 'block') {
        projects_menu.style.display = 'none';
        projects_collapse.style.display = 'none';
        projects_expand.style.display = 'block';
    } else {
        projects_menu.style.display = 'block';
        projects_collapse.style.display = 'block';
        projects_expand.style.display = 'none';
    };
});

const archive_option = document.querySelector('.archive');
archive_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild(archive());
});