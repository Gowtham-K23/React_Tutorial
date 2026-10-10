import React, { useState } from "react";

function TodoApp() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>My To-Do App</h1>

      {/* Input Section */}
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add
        </button>
      </div>

      {/* Conditional UI */}
      {todos.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No Tasks Available</p>
      ) : (
        <ul style={styles.list}>
          {todos.map(todo => (
            <li key={todo.id} style={styles.listItem}>
              {todo.text}
              <button
                onClick={() => deleteTask(todo.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Task Count */}
      <h3>Total Tasks: {todos.length}</h3>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  input: {
    padding: "8px",
    width: "200px"
  },
  button: {
    padding: "8px 12px",
    marginLeft: "10px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px"
  },
  listItem: {
    marginBottom: "10px"
  },
  deleteBtn: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 8px"
  }
};

export default TodoApp;