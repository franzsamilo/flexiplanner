import React, { useState } from "react";
import AddSchedule, { Schedule } from "./AddSchedule";

interface SchedulerProps {}

const Scheduler: React.FC<SchedulerProps> = () => {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [schedules, setSchedules] = useState<{ [key: string]: Schedule[] }>({});
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

  const handleClick = () => {
    setEditingSchedule(null);
    setShowAddSchedule(true);
  };

  const handleClose = () => {
    setShowAddSchedule(false);
  };

  const handleClickEdit = (day: string, index: number) => {
    const editedSchedule = schedules[day] ? schedules[day][index] : null;
    setEditingSchedule(editedSchedule);
    setShowAddSchedule(true);
  };

  const addSchedule = (day: string, schedule: Schedule) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [day]: [...(prevSchedules[day] || []), schedule],
    }));
  };

  const handleDeleteSchedule = (day: string, index: number) => {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[day] = updatedSchedules[day].filter(
        (_, i) => i !== index
      );
      return updatedSchedules;
    });
  };

  const editSchedule = (
    day: string,
    newSchedule: Schedule,
    oldSchedule: Schedule
  ) => {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[day] = updatedSchedules[day].map((s) =>
        s === oldSchedule ? newSchedule : s
      );
      return updatedSchedules;
    });
    setEditingSchedule(null);
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="bg-pink-50">
      <div className="flex flex-col items-center mx-auto max-w-3xl ">
        <div className="ml-auto ">
          <button className="text-lg text-black font-bold py-2 px-4 rounded w-70 mb-2 mr-[450px] text-[20px]">
            Class Schedule
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-70 mb-2"
            onClick={handleClick}
          >
            + Add event
          </button>
          {showAddSchedule && (
            <AddSchedule
              onClose={handleClose}
              addSchedule={addSchedule}
              editingSchedule={editingSchedule}
              editSchedule={editSchedule}
            />
          )}
        </div>

        <div className="border border-gray-400 shadow rounded-[30px] p-4 h-[800px] bg-white ">
          <div className="flex flex-col md:flex-row border-b w-full pb-2">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <h4 className="font-bold px-4 md:px-10 py-2">{day}</h4>
                <div className="storage-area p-2 mb-4">
                  {schedules[day]?.map((schedule, index) => (
                    <div
                      key={index}
                      className="bg-blue-300 p-4 mb-4 border border-gray-300 rounded"
                    >
                      <p className="text-black font-bold">{schedule.subject}</p>
                      <p>
                        {schedule.starts} - {schedule.ends}
                      </p>
                      <button
                        onClick={() => handleDeleteSchedule(day, index)}
                        className="text-red-400 bg-black p-1 rounded mb-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleClickEdit(day, index)}
                        className="text-blue-300 bg-black p-1 rounded ml-1"
                      >
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
