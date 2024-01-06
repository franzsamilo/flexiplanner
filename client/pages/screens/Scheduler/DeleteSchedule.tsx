import React from 'react';
import { Event } from '../../../Constants/types';

interface DeleteScheduleProps {
  onClose: () => void;
  onDelete: (eventId: number) => void;
  value: Event;
}

function DeleteSchedule({ onClose, onDelete, value }: DeleteScheduleProps) {
  const handleDeleteEvent = async () => {
    try {
      const response = await fetch(
        `http://localhost:6969/api/eventDelete/delete/${value.event_id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        onDelete(value.event_id);
        onClose();
      } else {
        console.error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Delete Event</h2>
        <p>
          Are you sure you want to delete the event &quot;{value.subject}&quot;?
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleDeleteEvent}
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

export default DeleteSchedule;
