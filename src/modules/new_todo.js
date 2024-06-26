import delete_icon from '../icons/delete.svg';
import checked_icon from '../icons/checked.svg';
import unchecked_icon from '../icons/unchecked.svg';


export default function new_todo(id, content, date, priority, complete, project) {
    return {
        id: id,
        content: content,
        date: date,
        priority: priority,
        complete: complete,
        project: project,
        render: function () {

            const new_task_container = document.createElement('div');
            new_task_container.classList = 'new_todo__new_task_container';

            const new_task_wrapper = document.createElement('div');
            new_task_wrapper.classList = 'new_todo__new_task_wrapper';
            new_task_container.appendChild(new_task_wrapper);

            const task_content = document.createElement('p');
            task_content.classList = 'new_todo__task_content';
            task_content.innerHTML = content;
            if (priority == 2) {
                task_content.style.color = '#8B0000';
            } else if (priority == 1) {
                task_content.style.color = 'orange';
            };

            const complete_btn = new Image();
            complete_btn.classList = 'button new_todo__complete_btn';
            if (!this.complete) {
                complete_btn.src = unchecked_icon;
            } else {
                this.complete = true;
                complete_btn.src = checked_icon;
                task_content.style.opacity = '.5';
            };
            complete_btn.addEventListener('click', () => {
                if (!this.complete) {
                    this.complete = true;
                    complete_btn.src = checked_icon;
                    task_content.style.opacity = '.5';
                } else {
                    this.complete = false;
                    complete_btn.src = unchecked_icon;
                    task_content.style.opacity = '1';
                };
                let task = { id, content, date, priority, complete: this.complete, project };
                localStorage.setItem(id, JSON.stringify(task));
            });
            new_task_wrapper.appendChild(complete_btn);
            new_task_wrapper.appendChild(task_content);



            const delete_button = new Image();
            delete_button.src = delete_icon;
            delete_button.classList = 'button new_todo__delete_task_btn';
            delete_button.addEventListener('click', () => {
                new_task_container.innerHTML = '';
                new_task_container.classList = '';
                localStorage.removeItem(id);
            });
            new_task_container.appendChild(delete_button);

            //modal
            task_content.addEventListener('click', () => {
                const modal_container = document.createElement('dialog');
                modal_container.classList = 'modal_container';

                const modal_wrapper = document.createElement('div');
                modal_wrapper.classList = 'modal_wrapper';
                modal_container.appendChild(modal_wrapper);

                const close_modal = document.createElement('div');
                close_modal.classList = 'close_modal';
                close_modal.innerHTML = 'x';
                close_modal.addEventListener('click', () => {
                    modal_container.close();
                });
                modal_wrapper.appendChild(close_modal);

                const modal_content = document.createElement('p');
                modal_content.classList = 'modal_content';
                modal_content.innerHTML = content;
                modal_content.style.color = task_content.style.color;
                modal_wrapper.appendChild(modal_content);

                const modal_info = document.createElement('div');
                modal_info.classList = 'modal_info';
                modal_wrapper.appendChild(modal_info);

                const date_info = document.createElement('span');
                date_info.classList = 'modal_date_info';
                date_info.innerHTML = '-/-/-';
                if (date) {
                    let formatted_date = date.split('-');
                    date_info.innerHTML = formatted_date[2] + '/' + formatted_date[1] + '/' + formatted_date[0];
                };
                modal_info.appendChild(date_info);

                const project_family = document.createElement('span');
                project_family.classList = 'modal_project_family';
                project_family.innerHTML = project;
                modal_info.appendChild(project_family);

                const body = document.querySelector('body');
                body.appendChild(modal_container);
                modal_container.showModal();
            });

            return new_task_container;
        }
    };
};