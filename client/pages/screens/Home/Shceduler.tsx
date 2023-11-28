import React, { useState } from "react";
import AddSchedule, { Schedule } from "./AddSchedule";
import Sidebar from "./Sidebar";

interface SchedulerProps {}

const Scheduler: React.FC<SchedulerProps> = () => {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [schedules, setSchedules] = useState<{ [key: string]: Schedule[] }>({});

  const handleClick = () => {
    setShowAddSchedule(true);
  };

  const handleClose = () => {
    setShowAddSchedule(false);
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row">
        {/* Days displayed horizontally */}
        <div className="flex flex-row mb-5 ml-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="flex-1 text-center">
              <h4 className="font-bold px-4 md:px-10 py-2 border border-lightblue">
                {day}
              </h4>
              {/* Display schedules for the day */}
              <div className="storage-area border-red-500 p-2 mb-4">
                {schedules[day]?.map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 p-4 mb-4 border border-gray-300 rounded"
                  >
                    <p className="text-black font-bold">{schedule.subject}</p>
                    <p>
                      {" "}
                      {schedule.starts} - {schedule.ends}
                    </p>

                    <button
                      onClick={() => handleDeleteSchedule(day, index)}
                      className="text-red-400 bg-black p-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ml-20">
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-80"
            onClick={handleClick}
          >
            Add Schedule
          </button>

          {showAddSchedule && (
            <AddSchedule onClose={handleClose} addSchedule={addSchedule} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
