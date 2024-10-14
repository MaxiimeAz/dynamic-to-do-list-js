/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* To-Do App Container */
#todo-app {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Input Field */
#task-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;
}

#task-input:focus {
    outline: none;
    border-color: #007bff;
}

/* Add Task Button */
#add-task-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#add-task-btn:hover {
    background-color: #0056b3;
}

/* Task List */
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    background-color: #eeeeee;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

li:hover {
    background-color: #e0e0e0;
}


.remove-btn {
    cursor: pointer;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}

.remove-btn:hover {
    background-color: #d9534f;
}
