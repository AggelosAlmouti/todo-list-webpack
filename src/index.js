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
import project from './modules/project';
import archive from './modules/archive';

function retreive_all() {
    let projects = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] == 'projects') {
            projects = JSON.parse(localStorage.getItem(keys[i]));
        };
    };

    return projects;
};

//icons
const option = document.querySelectorAll('.option_icon');
option[0].src = today_icon;
option[1].src = inbox_icon;
option[2].src = projects_icon;
option[3].src = archive_icon;

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
    };
    pages.appendChild(today());
});

const inbox_option = document.querySelector('.inbox');
inbox_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    };
    pages.appendChild(inbox());
});

//projects
const projects_expand = document.querySelector('.projects_expand');
projects_expand.src = expand_icon;
const projects_collapse = document.querySelector('.projects_collapse');
projects_collapse.src = collapse_icon;
const add_project_btn = document.querySelector('nav .add_project_btn');
add_project_btn.src = add_icon;

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

//retrieve all projects
let projects = retreive_all();
if (projects.length !== 0) {
    for (let i = 0; i < projects.length; i++) {
        const new_project = document.createElement('p');
        new_project.classList = 'menu_new_project';
        new_project.innerHTML = projects[i];

        new_project.addEventListener('click', () => {
            if (pages.hasChildNodes()) {
                pages.removeChild(pages.children[0]);
            };
            pages.appendChild(project(new_project.innerHTML));
        });
        projects_menu.appendChild(new_project);
    };
};

//modal for new projects
add_project_btn.addEventListener('click', () => {

    const modal_container = document.createElement('dialog');
    modal_container.classList = 'modal_container';
    const body = document.querySelector('body');
    body.appendChild(modal_container);
    modal_container.showModal();

    const modal_wrapper = document.createElement('div');
    modal_wrapper.classList = 'modal_wrapper index_projects_modal_wrapper';
    modal_container.appendChild(modal_wrapper);

    const close_modal = document.createElement('div');
    close_modal.classList = 'close_modal';
    close_modal.innerHTML = 'x';
    close_modal.addEventListener('click', () => {
        modal_container.close();
    });
    modal_wrapper.appendChild(close_modal);

    const modal_title = document.createElement('h2');
    modal_title.innerHTML = 'New Project:';
    modal_wrapper.appendChild(modal_title);

    const modal_input = document.createElement('input');
    modal_input.type = 'text';
    modal_input.maxLength = '23';
    modal_wrapper.appendChild(modal_input);

    modal_input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const new_project = document.createElement('p');
            new_project.classList = 'menu_new_project';
            new_project.innerHTML = modal_input.value;
            projects.push(new_project.innerHTML);

            localStorage.setItem('projects', JSON.stringify(projects));

            new_project.addEventListener('click', () => {
                if (pages.hasChildNodes()) {
                    pages.removeChild(pages.children[0]);
                };
                pages.appendChild(project(new_project.innerHTML));
            });
            projects_menu.appendChild(new_project);
        };
    });

});

const archive_option = document.querySelector('.archive');
archive_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    };
    pages.appendChild(archive());
});