import React, { useState, useEffect } from "react";
import AddSchedule, { Schedule } from "./AddSchedule";
import Image from "next/image";
import deleteIcon from "../../../public/assets/icons/delete.svg";

function Scheduler() {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [schedules, setSchedules] = useState<{ [key: string]: Schedule[] }>({});
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

  function handleClick() {
    setEditingSchedule(null);
    setShowAddSchedule(true);
  }

  function handleClose() {
    setShowAddSchedule(false);
  }

  function handleClickEdit(day: string, index: number) {
    const editedSchedule = schedules[day] ? schedules[day][index] : null;
    setEditingSchedule(editedSchedule);
    setShowAddSchedule(true);
  }

  function addSchedule(day: string, schedule: Schedule) {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [day]: [...(prevSchedules[day] || []), schedule],
    }));
  }

  function handleDeleteSchedule(day: string, index: number) {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[day] = updatedSchedules[day].filter(
        (_, i) => i !== index
      );
      return updatedSchedules;
    });
  }

  function editSchedule(
    day: string,
    newSchedule: Schedule,
    oldSchedule: Schedule
  ) {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[day] = updatedSchedules[day].map((s) =>
        s === oldSchedule ? newSchedule : s
      );
      return updatedSchedules;
    });
    setEditingSchedule(null);
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    fetch("http://localhost:6969/api/eventRead/read")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        const weeklySchedules: { [key: string]: Schedule[] } = {};

        data.forEach((event: any) => {
          const { day } = event;
          if (!weeklySchedules[day]) {
            weeklySchedules[day] = [];
          }
          weeklySchedules[day].push(event);
        });

        Object.keys(weeklySchedules).forEach((day) => {
          weeklySchedules[day].sort((a: any, b: any) => {
            const startTimeA = new Date(`1970-01-01T${a.starts}`);
            const startTimeB = new Date(`1970-01-01T${b.starts}`);
            return startTimeA.getTime() - startTimeB.getTime();
          });
        });

        Object.keys(weeklySchedules).forEach((day) => {
          const schedulesOfDay = weeklySchedules[day];

          for (let i = 0; i < schedulesOfDay.length - 1; i++) {
            const currentEnd = new Date(`1970-01-01T${schedulesOfDay[i].ends}`);
            const nextStart = new Date(
              `1970-01-01T${schedulesOfDay[i + 1].starts}`
            );

            if (currentEnd >= nextStart) {
              console.log(
                `Conflict detected on ${day} between ${
                  schedulesOfDay[i].subject
                } and ${schedulesOfDay[i + 1].subject}`
              );
            }
          }
        });

        setSchedules(weeklySchedules);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="bg-pink-50">
      <div className="flex flex-col items-center mx-auto  ">
        <div className="ml-auto flex flex-row">
          <div className="text-lg text-black font-bold py-2 px-4 rounded  mb-2 mr-[450px] text-[20px]">
            Class Schedule
          </div>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 mt-2 mb-2 rounded  mb-2"
            onClick={handleClick}
          >
            + ADD EVENT
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded  mb-2 ml-3 mt-2 mb-2"
            onClick={handleClick}
          >
            UPDATE EVENT
          </button>

          <button className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded  mb-2 ml-3 mt-2 mb-2 mr-[300px]">
            DELETE EVENT
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
                        className="text-red-400  p-1 rounded mb-2"
                      >
                        <Image src={deleteIcon} alt="" />
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
}

export default Scheduler;
