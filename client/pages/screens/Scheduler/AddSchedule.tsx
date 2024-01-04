import React, { useState } from "react";
import { Event } from "../Constants/types";

interface AddScheduleProps {
  onClose: () => void;
  addSchedule: (schedule: Event) => void;
}

function AddSchedule({ onClose, addSchedule }: AddScheduleProps) {
  const [schedule, setSchedule] = useState<Event>({
    event_id: 0,
    day: "",
    subject: "",
    starts: "",
    ends: "",
    user_id: 0, 
    category_name: "",
  });

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
    for (let i = 0; i < 24; i++) {
      const time = `${i < 10 ? "0" : ""}${i}:00`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
    return options;
  }

  function handleAddSchedule() {
    if (schedule.day && schedule.subject && schedule.starts && schedule.ends) {
      const newEvent: Event = {
        ...schedule,
        user_id: 1, 
        category_name: "",
      };
  
      fetch("http://localhost:6969/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add event");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Event created successfully:", data);
          addSchedule(newEvent);
          onClose();
        })
        .catch((error) => {
          console.error("Error adding event:", error);
        });
    }
  }
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>

        <label className="block mb-2">
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

        <label className="block mb-2">
          Subject:
          <input
            type="text"
            name="subject"
            value={schedule.subject}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </label>

        <label className="block mb-2">
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

        <label className="block mb-2">
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
            onClick={handleAddSchedule}
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

export default AddSchedule;
