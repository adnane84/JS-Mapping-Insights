// Exercise 15: Task Management
// Build a simple task management system using a Map where tasks are stored with their names as keys and due dates as values. 
// Implement functions to add tasks, mark tasks as completed, and display pending tasks.

class TaskManager {
  constructor() {
    this.tasks = new Map();
  }

  addTask(taskName, dueDate) {
    this.tasks.set(taskName, dueDate);
  }

  completeTask(taskName) {
    if (this.tasks.has(taskName)) {
      this.tasks.delete(taskName);
      console.log(`Task '${taskName}' marked as completed.`);
    } else {
      console.log(`Task '${taskName}' not found.`);
    }
  }

  displayPendingTasks() {
    console.log("Pending Tasks:");
    for (const [taskName, dueDate] of this.tasks) {
      console.log(`- ${taskName} (Due: ${dueDate})`);
    }
  }
}

const taskManager = new TaskManager();

taskManager.addTask("Finish report", "2023-08-25");
taskManager.addTask("Prepare presentation", "2023-08-27");
taskManager.addTask("Submit expenses", "2023-08-30");

taskManager.displayPendingTasks();

taskManager.completeTask("Prepare presentation");
taskManager.displayPendingTasks();

taskManager.completeTask("Nonexistent task");
