import React, { useState } from "react";

interface AddTaskProps {
  onClose: () => void;
}

function AddTask({ onClose }: AddTaskProps) {
  const [TaskName, setTaskName] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [TaskPriority, setTaskPriority] = useState("Low");
  const [TaskDueDate, setTaskDueDate] = useState("");
  const [TaskDurationDays, setTaskDurationDays] = useState(0);
  const [TaskDurationHours, setTaskDurationHours] = useState(0);
  const [TaskDurationMinutes, setTaskDurationMinutes] = useState(0);
  const [TaskStatus, setTaskStatus] = useState("");

  function handleAddTask() {
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>

        <label className="block mb-2">
          Task Name:
          <input
            type="text"
            value={TaskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2">
          Task Description:
          <textarea
            value={TaskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2">
          Priority:
          <select
            value={TaskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Optional">Optional</option>
          </select>
        </label>

        <label className="block mb-2">
          Due Date:
          <input
            type="date"
            value={TaskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <div className="flex mb-2">
          <div className="w-1/3">
            <label>
              Duration (Days):
              <input
                type="number"
                value={TaskDurationDays}
                onChange={(e) => setTaskDurationDays(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3">
            <label>
              Duration (Hours):
              <input
                type="number"
                value={TaskDurationHours}
                onChange={(e) => setTaskDurationHours(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3">
            <label>
              Duration (Minutes):
              <input
                type="number"
                value={TaskDurationMinutes}
                onChange={(e) => setTaskDurationMinutes(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
        </div>

        <label className="block mb-2">
          Status:
          <select
            value={TaskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="Todo">To-do</option>
            <option value="Inprogress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <div className="flex justify-end">
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Task
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
