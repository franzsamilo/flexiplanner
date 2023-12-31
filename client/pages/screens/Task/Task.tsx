import React, { useState, useEffect, useCallback } from 'react';
import AddTask from '../Task/AddTask';
import UpdateTask from '../Task/UpdateTask';
import DeleteTask from '../Task/DeleteTask';
import { Task } from '../../../Constants/types';

interface TaskProps {
  selectedCategory: string;
}

function formatDueDate(dueDate: string) {
  let date = new Date(dueDate);
  date.setHours(12, 0, 0, 0);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}

function formatDuration(days: number, hours: number, minutes: number) {
  let durationParts = [];

  if (days > 0) {
    durationParts.push(`${days} d`);
  }
  if (hours > 0) {
    durationParts.push(`${hours} h`);
  }
  if (minutes > 0) {
    durationParts.push(`${minutes} m`);
  }

  const formattedDuration = durationParts.join(', ');
  return formattedDuration;
}

function Task({ selectedCategory }: TaskProps) {
  const tableHeaders = ['Name', 'Priority', 'DueDate', 'Duration', 'Status'];
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const [showDeleteTask, setShowDeleteTask] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserId(user.user_id);
  }, []);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const currentTasks = tasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function handleClickTask() {
    setShowTask(true);
  }

  function handleCloseTask() {
    setShowTask(false);
    fetchTasks(selectedCategory);
  }

  function handleEditTask(task: Task) {
    setSelectedTask(task);
    setShowTask(true);
  }

  function handleDeleteTask(task: Task) {
    setTaskToDelete(task);
    setShowDeleteTask(true);
  }

  function handleCloseDeleteTask() {
    setTaskToDelete(null);
    setShowDeleteTask(false);
    fetchTasks(selectedCategory);
  }

  const fetchTasks = useCallback(
    async (selectedCategory: string) => {
      if (userId !== null) {
        try {
          const response = await fetch(
            `http://localhost:5001/api/taskRead/read/${userId}?category_name=${selectedCategory}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch tasks');
          }
          const data = await response.json();
          setTasks(data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    },
    [userId]
  );

  useEffect(() => {
    fetchTasks(selectedCategory);
    console.log(selectedCategory);
  }, [fetchTasks, selectedCategory]);

  return (
    <div className="">
      <div className="flex flex-col items-center mx-auto my-5 w-[1200px]">
        <div className="flex flex-row w-[1200px]">
          <div className="text-lg text-black font-bold py-2 px-4 rounded w-70 mb-2 mr-auto ml-5 text-[20px]">
            To do&apos;s
          </div>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded w-70 mb-2 ml-auto mr-5"
            onClick={handleClickTask}
          >
            + Add Task
          </button>
          {showTask && (
            <AddTask
              onClose={handleCloseTask}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
        <div className="border border-gray-400 shadow rounded-[30px] p-4 h-auto w-[1200px] mb-10 bg-white">
          <div className="flex flex-col md:flex-row border-b w-full pb-2">
            {tableHeaders.map((header, index) => (
              <div key={index} className="flex-1 text-center">
                <h4 className="font-bold px-4 md:px-10 py-2">{header}</h4>
              </div>
            ))}
            <div className="flex-1 text-center"></div>
          </div>
          {currentTasks.map((task) => (
            <div
              key={task.task_id}
              className="flex flex-col md:flex-row border-b w-full pb-2"
            >
              <div className="flex-1 text-center max-w-[190px]">
                <p className="px-4 md:px-8 py-2 truncate">{task.task_name}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="px-4 md:px-10 py-2">{task.task_priority}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="px-4 md:px-10 py-2">
                  {task.task_due_date ? formatDueDate(task.task_due_date) : ''}
                </p>
              </div>
              <div className="flex-1 text-center">
                <p className="px-4 md:px-18 py-2">
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
              <div className="flex-1 text-center">
                <button
                  className="cursor-pointer text-blue-500 hover:font-medium"
                  onClick={() => handleEditTask(task)}
                  data-target={`#id${task.task_id}`}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer text-red-500 ml-2 hover:font-medium"
                  onClick={() => handleDeleteTask(task)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="flex space-x-2">
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number}
                className={`px-3 py-2 border rounded ${
                  currentPage === number + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                }`}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </button>
            ))}
          </div>

          {showTask && selectedTask && (
            <UpdateTask
              onClose={() => {
                setShowTask(false);
                setSelectedTask(null);
                fetchTasks(selectedCategory);
              }}
              value={selectedTask}
            />
          )}

          {showDeleteTask && taskToDelete && (
            <DeleteTask
              onClose={handleCloseDeleteTask}
              onDelete={(taskId) => {
                setTasks((prevTasks) =>
                  prevTasks.filter((task) => task.task_id !== taskId)
                );
              }}
              value={taskToDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
