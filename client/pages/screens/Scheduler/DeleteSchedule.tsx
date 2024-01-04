import React from "react";

interface DeleteScheduleProps {
  onClose: () => void;
  onDelete: () => void;
  subject: string;
}

function DeleteSchedule({ onClose, onDelete, subject }: DeleteScheduleProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Delete Event</h2>
        <label className="block mb-2">
          <p className="my-1">Subject Name:</p>
          <input
            value={subject}
            type="text"
            name="subject"
            className="border rounded w-full p-2"
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Delete Event
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

export default DeleteSchedule;
