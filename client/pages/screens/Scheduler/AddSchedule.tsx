import React, { useState, useEffect } from "react";

export interface Schedule {
  day: string;
  subject: string;
  starts: string;
  ends: string;
}

interface AddScheduleProps {
  onClose: () => void;
  addSchedule: (day: string, schedule: Schedule) => void;
  editingSchedule: Schedule | null;
  editSchedule: (
    day: string,
    newSchedule: Schedule,
    oldSchedule: Schedule
  ) => void;
}

const AddSchedule: React.FC<AddScheduleProps> = ({
  onClose,
  addSchedule,
  editingSchedule,
  editSchedule,
}) => {
  const [schedule, setSchedule] = useState<Schedule>(
    editingSchedule || {
      day: "",
      subject: "",
      starts: "",
      ends: "",
    }
  );

  useEffect(() => {
    setSchedule(
      editingSchedule || {
        day: "",
        subject: "",
        starts: "",
        ends: "",
      }
    );
  }, [editingSchedule]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
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
      if (editingSchedule) {
        editSchedule(schedule.day, schedule, editingSchedule);
      } else {
        addSchedule(schedule.day, schedule);
      }
      onClose();
    }
  }

  return (
    <div className="relative bg-gray-300 p-10 rounded">
      <button
        className="absolute top-2 right-2 border-2 border-red-500 text-red-500 px-2 py-1 rounded cursor-pointer"
        onClick={onClose}
      >
        X
      </button>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <select
            name="day"
            value={schedule.day}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="subject"
            value={schedule.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select
            name="starts"
            value={schedule.starts}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Start Time</option>
            {generateTimeOptions()}
          </select>
        </div>
        <div className="mb-4">
          <select
            name="ends"
            value={schedule.ends}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select End Time</option>
            {generateTimeOptions()}
          </select>
        </div>

        <button
          className="bg-black hover:bg-green-400 hover:text-black text-white font-bold py-2 px-4 rounded"
          onClick={handleAddSchedule}
        >
          {editingSchedule ? "Update" : "Add"} +
        </button>
      </div>
    </div>
  );
}

export default AddSchedule;
