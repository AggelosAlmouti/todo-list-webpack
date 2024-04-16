import edit_icon from '../icons/edit.svg';
import delete_icon from '../icons/delete.svg';

export default function new_todo(content, date, priority) {
    return {
        content: content,
        date: date,
        priority: priority,
        render: function () {
            const task_content = document.createElement('p');
            task_content.classList = ' new_todo task_content';
            task_content.innerHTML = content;

            const delete_button = new Image();
            delete_button.src = delete_icon;
            delete_button.classList = 'button delete_task_btn';
            task_content.appendChild(delete_button);

            return task_content;
        },

        //mark complete
        //delete
    };
};