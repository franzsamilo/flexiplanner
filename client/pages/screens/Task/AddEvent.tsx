import React, { useState } from "react";

interface AddEventProps {
  onClose: () => void;
}

function AddEvent({ onClose }: AddEventProps) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventPriority, setEventPriority] = useState("Low");
  const [eventDueDate, setEventDueDate] = useState("");
  const [eventDurationDays, setEventDurationDays] = useState(0);
  const [eventDurationHours, setEventDurationHours] = useState(0);
  const [eventDurationMinutes, setEventDurationMinutes] = useState(0);
  const [eventStatus, setEventStatus] = useState("");

  function handleAddEvent() {
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>

        <label className="block mb-2">
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2">
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2">
          Priority:
          <select
            value={eventPriority}
            onChange={(e) => setEventPriority(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </label>

        <label className="block mb-2">
          Due Date:
          <input
            type="date"
            value={eventDueDate}
            onChange={(e) => setEventDueDate(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <div className="flex mb-2">
          <div className="w-1/3">
            <label>
              Duration (Days):
              <input
                type="number"
                value={eventDurationDays}
                onChange={(e) => setEventDurationDays(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3">
            <label>
              Duration (Hours):
              <input
                type="number"
                value={eventDurationHours}
                onChange={(e) => setEventDurationHours(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
          <div className="w-1/3">
            <label>
              Duration (Minutes):
              <input
                type="number"
                value={eventDurationMinutes}
                onChange={(e) => setEventDurationMinutes(e.target.value)}
                className="border rounded w-full p-2"
              />
            </label>
          </div>
        </div>

        <label className="block mb-2">
          Status:
          <input
            type="text"
            value={eventStatus}
            onChange={(e) => setEventStatus(e.target.value)}
            className="border rounded w-full p-2"
          />
        </label>

        <div className="flex justify-end">
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Event
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

export default AddEvent;
