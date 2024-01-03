import React, { useState, useEffect } from 'react';
import AddTask from '../Task/AddTask';
import Scheduler from '../Scheduler/Scheduler';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

interface Task {
  task_id: number;
  task_name: string;
  task_description: string;
  task_priority: string; // Assuming task_priority is a string type
  task_due_date: string; // Assuming task_due_date is a string type (formatted as "yyyy-mm-dd")
  task_duration_days: number;
  task_duration_hours: number;
  task_duration_minutes: number;
  task_status: string; // Assuming task_status is a string type
  user_id: number;
  category_name: string; // Assuming category_name is a string type
}

function formatDueDate(dueDate) {
  const formattedDate = new Date(dueDate).toISOString().split('T')[0];
  return formattedDate;
}

function formatDuration(days, hours, minutes) {
  const formattedDuration = `${days} d, ${hours
    .toString()
    .padStart(2, '0')} h, ${minutes.toString().padStart(2, '0')} m`;
  return formattedDuration;
}

function Task() {
  const tableHeaders = ['Name', 'Priority', 'DueDate', 'Duration', 'Status'];

  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:6969/api/taskRead/read');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  function handleClickTask() {
    setShowTask(true);
  }

  const handleCloseTask = () => {
    setShowTask(false);
    // Refresh tasks after adding a new task
    fetchTasks();
  };

  const [headerText, setHeaderText] = useState('Academics');

  function updateHeaderText(text: string) {
    setHeaderText(text);
  }

  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <div className="flex flex-row ">
        <Sidebar updateHeaderText={updateHeaderText} />

        <main className="flex flex-col w-full h-auto">
          <Header buttonText={headerText} />
          <Scheduler />
          <div className="bg-pink-50">
            <div className="flex flex-col items-center mx-auto my-5 w-[1075px]">
              <div className="flex flex-row w-[1075px]">
                <div className="text-lg text-black font-bold py-2 px-4 rounded w-70 mb-2 mr-auto ml-5 text-[20px]">
                  To do&apos;s
                </div>
                <button
                  className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-70 mb-2 ml-auto mr-5"
                  onClick={handleClickTask}
                >
                  + Add Task
                </button>

                {showTask && <AddTask onClose={handleCloseTask} />}
              </div>

              <div className="border border-gray-400 shadow rounded-[30px] p-4 h-auto w-[1075px] mb-10 bg-white">
                <div className="flex flex-col md:flex-row border-b w-full pb-2">
                  {tableHeaders.map((header, index) => (
                    <div key={index} className="flex-1 text-center">
                      <h4 className="font-bold px-4 md:px-10 py-2">{header}</h4>
                    </div>
                  ))}
                </div>
                {tasks.map((task) => (
                  <div
                    key={task.task_id}
                    className="flex flex-col md:flex-row border-b w-full pb-2"
                  >
                    <div className="flex-1 text-center">
                      <p className="px-4 md:px-10 py-2">{task.task_name}</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="px-4 md:px-10 py-2">{task.task_priority}</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="px-4 md:px-10 py-2">
                        {formatDueDate(task.task_due_date)}
                      </p>
                    </div>
                    <div className="flex-1 text-center text-sm">
                      <p className="px-4 md:px-10 py-2">
                        {formatDuration(
                          task.task_duration_days,
                          task.task_duration_hours,
                          task.task_duration_minutes
                        )}
                      </p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="px-4 md:px-10 py-2">{task.task_status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Task;
