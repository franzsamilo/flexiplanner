import React from 'react';
import { Task } from '../Constants/types';

interface DeleteTaskProps {
  onClose: () => void;
  onDelete: (taskId: number) => void;
  value: Task;
}

function DeleteTask({ onClose, onDelete, value }: DeleteTaskProps) {
  const handleDeleteTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:6969/api/taskDelete/delete/${value.task_id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        onDelete(value.task_id);
        onClose();
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Delete Task</h2>
        <p>
          Are you sure you want to delete the task &quot;{value.task_name}
          &quot;?
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleDeleteTask}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Delete
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

export default DeleteTask;
