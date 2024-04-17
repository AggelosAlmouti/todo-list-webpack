import edit_icon from '../icons/edit.svg';
import delete_icon from '../icons/delete.svg';

export default function new_todo(content, date, priority) {
    return {
        content: content,
        date: date,
        priority: priority,
        render: function () {
            const new_task_container = document.createElement('div');
            new_task_container.classList = 'new_todo__new_task_container';

            const task_content = document.createElement('p');
            task_content.classList = 'new_todo__task_content';
            task_content.innerHTML = content;
            new_task_container.appendChild(task_content);

            const delete_button = new Image();
            delete_button.src = delete_icon;
            delete_button.classList = 'button new_todo__delete_task_btn';
            delete_button.addEventListener('click', () => {
                new_task_container.innerHTML = '';
            });
            new_task_container.appendChild(delete_button);

            task_content.addEventListener('click', () => {
                const modal_container = document.createElement('dialog');
                modal_container.classList = 'new_todo__modal_container';
                
                const modal_content = document.createElement('p');
                modal_content.classList = 'new_todo__modal_content';
                modal_content.innerHTML = content;
                modal_container.appendChild(modal_content);

                const modal_info = document.createElement('div');
                modal_info.classList = 'new_todo__modal_info';
                modal_info.innerHTML = `${date}, ${priority}`;
                modal_container.appendChild(modal_info);

                const body = document.querySelector('body');
                body.appendChild(modal_container);
                modal_container.showModal();
            });

            return new_task_container;
        },

        //mark complete
    };
};