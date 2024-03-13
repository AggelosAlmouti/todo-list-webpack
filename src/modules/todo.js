export default function todo(title, description) {
    return {
        title: title,
        description: description,
        render: function () {
            const task = document.createElement('div');
            task.classList = 'task';
            task.innerHTML = `${title} ${description}`;
            return task;
        }
        //mark complete
        //edit
        //change priority
        //set date
    };
};