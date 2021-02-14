import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting with Sarang",
      day: 'Feb 20th at 3pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'HR Call',
      day: 'Feb 18th at 10am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Visit Collage',
      day: 'Mar 1st at 10',
      reminder: false,
    },
    {
      id: 4,
      text: 'Food SHooping',
      day: 'Feb 15th at 5pm',
      reminder: false,
    }
  ])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />
      {tasks.length == 0 ? (
        "No tasks to show") : (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)}
    </div>
  );
}

export default App;
