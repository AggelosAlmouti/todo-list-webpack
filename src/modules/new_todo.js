export default function new_todo(content) {
    return {
        content: content,
        render: function () {
            const task = document.createElement('p');
            task.classList = 'task';
            task.innerHTML = content;
            return task;
        },
        //set priority
        //set date

        //mark complete
        //delete
    };
};