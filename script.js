// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Initialize tasks array
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load each task
    }

    // Function to add a new task
    const addTask = (taskText, save = true) => {
        // If taskText is not provided, get it from the input
        if (!taskText) {
            taskText = taskInput.value.trim(); // Get the value from the input field
        }

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return; // Exit the function if no task is provided
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set text of list item
        listItem.classList.add('task-item'); // Add a class for task styling

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.classList.add('remove-btn'); // Add a class for button styling

        // Attach click event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the task from the list
            tasks = tasks.filter(task => task !== taskText); // Remove task from tasks array
            updateLocalStorage(); // Update Local Storage after removal
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Only save to Local Storage if save is true
        if (save) {
            tasks.push(taskText); // Add task to tasks array
            updateLocalStorage(); // Update Local Storage
        }

        // Clear the input field
        taskInput.value = '';
    };

    // Function to update Local Storage
    const updateLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks array to Local Storage
    };

    // Attach event listener to the add button
    addButton.addEventListener('click', () => addTask());

    // Attach event listener to allow adding task with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });

    // Load tasks on page load
    loadTasks();
});
