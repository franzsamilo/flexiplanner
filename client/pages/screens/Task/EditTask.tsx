import React, { useState, useEffect } from 'react';
import Task from '../Constants/types'


interface EditTaskProps {
  taskDetails: Task; // Task object fetched from the database
  onClose: () => void;
}

function EditTask({ taskDetails, onClose }: EditTaskProps) {
  const [editedTask, setEditedTask] = useState<Task>({ ...taskDetails });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditTask = () => {
    // Here, you can make an API call to update the task in the database with editedTask details
    // You can use fetch or any preferred method to send the updated task data to your backend
    console.log('Edited Task:', editedTask);
    // Close the modal after editing
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>

        <label className="block mb-2">
          Task Name:
          <input
            type="text"
            name="task_name"
            value={editedTask.task_name}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
        </label>

        {/* Other input fields for editing other task details */}
        
        <div className="flex justify-end">
          <button
            onClick={handleEditTask}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Update Task
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

export default EditTask;
