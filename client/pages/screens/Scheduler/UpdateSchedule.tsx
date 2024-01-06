import React, { useState, useEffect } from 'react';
import { Event } from '../../../Constants/types';

interface UpdateScheduleProps {
  onClose: () => void;
  selectedSchedule: Event;
  updateSchedule: (schedule: Event) => void;
}

function UpdateSchedule({
  onClose,
  selectedSchedule,
  updateSchedule,
}: UpdateScheduleProps) {
  const [schedule, setSchedule] = useState<Event>(selectedSchedule);

  useEffect(() => {
    setSchedule(selectedSchedule);
  }, [selectedSchedule]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setSchedule((prevSchedule: Event) => ({
      ...prevSchedule,
      [name]: value,
    }));
  }

  function generateTimeOptions() {
    const options = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 5) {
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const time = `${formattedHours}:${formattedMinutes}`;

        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }

    return options;
  }

  function handleUpdateSchedule() {
    if (schedule.day && schedule.subject && schedule.starts && schedule.ends) {
      const updatedEvent: Event = {
        ...schedule,
        user_id: 1,
        category_name: '',
      };

      const startTime = new Date(`1970-01-01T${schedule.starts}`);
      const endTime = new Date(`1970-01-01T${schedule.ends}`);

      if (endTime <= startTime) {
        alert('End time must be later than start time');
        return;
      }

      const token = localStorage.getItem('token');

      fetch(
        `http://localhost:6969/api/eventUpdate/update/${schedule.event_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedEvent),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update event');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Event updated successfully:', data);
          updateSchedule(updatedEvent);
          onClose();
        })
        .catch((error) => {
          console.error('Error updating event:', error);
        });
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Update Event</h2>

        <label className="block mb-2" id={`id${schedule.event_id}`}>
          Day:
          <select
            name="day"
            value={schedule.day}
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesay</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>

        <label className="block mb-2" id={`id${schedule.event_id}`}>
          Subject:
          <input
            type="text"
            name="subject"
            value={schedule.subject}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2" id={`id${schedule.event_id}`}>
          Start Time:
          <select
            name="starts"
            value={schedule.starts}
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="">Select Start Time</option>
            {generateTimeOptions()}
          </select>
        </label>

        <label className="block mb-2" id={`id${schedule.event_id}`}>
          End Time:
          <select
            name="ends"
            value={schedule.ends}
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="">Select End Time</option>
            {generateTimeOptions()}
          </select>
        </label>

        <div className="flex justify-end">
          <button
            onClick={handleUpdateSchedule}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Update Event
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

export default UpdateSchedule;
