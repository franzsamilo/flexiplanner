import React, { useState } from 'react';
import { Task } from '../../../Constants/types';

interface UpdateTaskProps {
  onClose: () => void;
  value: Task;
}

function UpdateTask({ onClose, value }: UpdateTaskProps) {
  const [UpdatedTaskName, setUpdatedTaskName] = useState(value.task_name);
  const [UpdatedTaskPriority, setUpdatedTaskPriority] = useState(
    value.task_priority
  );
  const [UpdatedTaskDueDate, setUpdatedTaskDueDate] = useState(
    value.task_due_date
  );
  const [UpdatedTaskDurationDays, setUpdatedTaskDurationDays] = useState(
    value.task_duration_days
  );
  const [UpdatedTaskDurationHours, setUpdatedTaskDurationHours] = useState(
    value.task_duration_hours
  );
  const [UpdatedTaskDurationMinutes, setUpdatedTaskDurationMinutes] = useState(
    value.task_duration_minutes
  );
  const [UpdatedTaskStatus, setUpdatedTaskStatus] = useState(value.task_status);
  const [isUpdatedTaskNameValid, setIsUpdatedTaskNameValid] = useState(true);

  const today = new Date().toISOString().split('T')[0];

  function handleDueDateChange(date: string) {
    if (date >= today) {
      setUpdatedTaskDueDate(date);
    } else {
      console.log('Please select a date on or after today.');
    }
  }

  async function handleUpdateTask() {
    try {
      if (!UpdatedTaskName) {
        setIsUpdatedTaskNameValid(false);
        return;
      }
      console.log('Before fetch');
      const body = {
        task_id: value.task_id,
        task_name: UpdatedTaskName,
        task_priority: UpdatedTaskPriority,
        task_due_date: UpdatedTaskDueDate,
        task_duration_days: UpdatedTaskDurationDays,
        task_duration_hours: UpdatedTaskDurationHours,
        task_duration_minutes: UpdatedTaskDurationMinutes,
        task_status: UpdatedTaskStatus,
      };

      const response = await fetch(
        `http://localhost:6969/api/taskUpdate/update/${value.task_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      console.log('This is the response: ', response);

      if (response.ok) {
        onClose();
      }

      console.log('After fetch');
    } catch (error) {
      console.error('Error updating tasks:', error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Update Task</h2>

        <label className="block mb-2" id={`id${value.task_id}`}>
          Task Name:
          <input
            type="text"
            value={UpdatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2" id={`id${value.task_id}`}>
          Priority:
          <select
            value={UpdatedTaskPriority}
            onChange={(e) => setUpdatedTaskPriority(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Optional">Optional</option>
          </select>
        </label>

        <label className="block mb-2" id={`id${value.task_id}`}>
          Due Date:
          <input
            type="date"
            value={UpdatedTaskDueDate}
            min={today}
            onChange={(e) => handleDueDateChange(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <div className="flex mb-2" id={`id${value.task_id}`}>
          <div className="w-1/3">
            <label>
              Duration (Days):
              <input
                type="number"
                value={UpdatedTaskDurationDays}
                onChange={(e) => {
                  const days = Number(e.target.value);
                  if (days < 0) {
                    setUpdatedTaskDurationDays(0);
                  } else {
                    setUpdatedTaskDurationDays(days);
                  }
                }}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3" id={`id${value.task_id}`}>
            <label>
              Duration (Hours):
              <input
                type="number"
                value={UpdatedTaskDurationHours}
                onChange={(e) => {
                  const hours = Number(e.target.value);
                  if (hours < 0 || hours > 23) {
                    setUpdatedTaskDurationHours(0);
                  } else {
                    setUpdatedTaskDurationHours(hours);
                  }
                }}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3" id={`id${value.task_id}`}>
            <label>
              Duration (Minutes):
              <input
                type="number"
                value={UpdatedTaskDurationMinutes}
                onChange={(e) => {
                  const minutes = Number(e.target.value);
                  if (minutes < 0 || minutes > 59) {
                    setUpdatedTaskDurationMinutes(0);
                  } else {
                    setUpdatedTaskDurationMinutes(minutes);
                  }
                }}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
        </div>

        <label className="block mb-2" id={`id${value.task_id}`}>
          Status:
          <select
            value={UpdatedTaskStatus}
            onChange={(e) => setUpdatedTaskStatus(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="To do">To-do</option>
            <option value="In progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        {!isUpdatedTaskNameValid && (
          <p className="text-red-500">Please input task name</p>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleUpdateTask}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
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

export default UpdateTask;
