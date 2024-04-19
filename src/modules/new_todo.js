import edit_icon from '../icons/edit.svg';
import delete_icon from '../icons/delete.svg';
import checked_icon from '../icons/checked.svg';
import unchecked_icon from '../icons/unchecked.svg';

export default function new_todo(content, date, priority) {
    return {
        content: content,
        date: date,
        priority: priority,
        render: function () {
            const new_task_container = document.createElement('div');
            new_task_container.classList = 'new_todo__new_task_container';

            const new_task_wrapper = document.createElement('div');
            new_task_wrapper.classList = 'new_todo__new_task_wrapper';
            new_task_container.appendChild(new_task_wrapper);

            const complete_btn = new Image();
            complete_btn.classList = 'button new_todo__complete_btn';
            complete_btn.src = unchecked_icon;
            complete_btn.value = false;
            complete_btn.addEventListener('click', () => {
                if (!complete_btn.value) {
                    complete_btn.src = checked_icon;
                    complete_btn.value = true;
                    task_content.style.opacity = '.5';
                } else {
                    complete_btn.src = unchecked_icon;
                    complete_btn.value = false;
                    task_content.style.opacity = '1';
                }
            });
            new_task_wrapper.appendChild(complete_btn);

            const task_content = document.createElement('p');
            task_content.classList = 'new_todo__task_content';
            task_content.innerHTML = content;
            if(priority == 2) {
                task_content.style.color = '#8B0000';
            }else if(priority == 1) {
                task_content.style.color = 'orange';
            }
            new_task_wrapper.appendChild(task_content);

            const delete_button = new Image();
            delete_button.src = delete_icon;
            delete_button.classList = 'button new_todo__delete_task_btn';
            delete_button.addEventListener('click', () => {
                new_task_container.innerHTML = '';
                new_task_container.classList = '';
            });
            new_task_container.appendChild(delete_button);

            //modal
            task_content.addEventListener('click', () => {
                const modal_container = document.createElement('dialog');
                modal_container.classList = 'new_todo__modal_container';

                const modal_wrapper = document.createElement('div');
                modal_wrapper.classList = 'new_todo__modal_wrapper';
                modal_container.appendChild(modal_wrapper);

                const close_modal = document.createElement('div');
                close_modal.classList = 'new_todo__close_modal';
                close_modal.innerHTML = 'x';
                close_modal.addEventListener('click', () => {
                    modal_container.close();
                });
                modal_wrapper.appendChild(close_modal);

                const modal_content = document.createElement('p');
                modal_content.classList = 'new_todo__modal_content';
                modal_content.innerHTML = content;
                modal_wrapper.appendChild(modal_content);

                const modal_info = document.createElement('div');
                modal_info.classList = 'new_todo__modal_info';
                modal_info.innerHTML = date;
                modal_wrapper.appendChild(modal_info);

                const body = document.querySelector('body');
                body.appendChild(modal_container);
                modal_container.showModal();
            });

            return new_task_container;
        },
    };
};