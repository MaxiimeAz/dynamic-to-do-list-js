// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Function to add a new task
    const addTask = () => {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return; // Exit the function if no task is provided
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set text of list item

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Set button class for styling

        // Attach click event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the task from the list
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    };

    // Attach event listener to the add button
    addButton.addEventListener('click', addTask);

    // Attach event listener to allow adding task with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});
