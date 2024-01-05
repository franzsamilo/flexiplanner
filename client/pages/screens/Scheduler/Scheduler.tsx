import React, { useState, useEffect } from "react";
import AddSchedule from "./AddSchedule";
import UpdateSchedule from "./UpdateSchedule";
import DeleteSchedule from "./DeleteSchedule";
import { Event } from "../Constants/types";

function Scheduler() {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [showUpdateSchedule, setShowUpdateSchedule] = useState(false);
  const [showDeleteSchedule, setShowDeleteSchedule] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Event | null>(null);
  const [schedules, setSchedules] = useState<{ [key: string]: Event[] }>({});

  function handleAddEvent() {
    setShowAddSchedule(true);
  }

  function handleUpdateEvent() {
    setShowUpdateSchedule(true);
  }

  function handleDeleteEvent() {
    setShowDeleteSchedule(true);
  }

  function handleClose() {
    setShowAddSchedule(false);
    setShowUpdateSchedule(false);
    setShowDeleteSchedule(false);
  }

  function addSchedule(schedule: Event) {
    const { day } = schedule;

    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [day]: [...(prevSchedules[day] || []), schedule],
    }));

    window.location.reload();
  }

  function formatTime(time) {
    const date = new Date(`1970-01-01T${time}`);
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:6969/api/eventRead/read"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        const weeklySchedules = {};

        data.forEach((event: Event) => {
          const { day } = event;
          if (!weeklySchedules[day]) {
            weeklySchedules[day] = [];
          }
          weeklySchedules[day].push(event);
        });

        Object.keys(weeklySchedules).forEach((day) => {
          weeklySchedules[day].sort((a, b) => {
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
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-pink-50">
      <div className="flex flex-col items-center mx-auto">
        <div className="ml-auto flex flex-row">
          <div className="text-lg text-black font-bold py-2 px-4 rounded mb-2 mr-[450px] text-[20px]">
            Class Schedule
          </div>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 mt-2 mb-2 rounded"
            onClick={handleAddEvent}
          >
            + ADD EVENT
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded mb-2 ml-3 mt-2 "
            onClick={handleUpdateEvent}
          >
            UPDATE EVENT
          </button>

          <button
            className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded mb-2 ml-3 mt-2 mr-[300px]"
            onClick={handleDeleteEvent}
          >
            DELETE EVENT
          </button>

          {showAddSchedule && (
            <AddSchedule
              onClose={handleClose}
              addSchedule={addSchedule}
              existingSchedules={[]}
            />
          )}
          {showUpdateSchedule && <UpdateSchedule onClose={handleClose} />}
          {showDeleteSchedule && (
            <DeleteSchedule
              onClose={handleClose}
              onDelete={handleClose}
              subject={selectedSchedule?.subject || ""}
            />
          )}
        </div>

        <div className="border border-gray-400 shadow rounded-[30px] p-4 h-[800px] bg-transparent ">
          <div className="grid grid-cols-7 gap-4 ">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <h4 className="font-bold px-4 md:px-10 py-2">{day}</h4>
                <div className="storage-area p-2">
                  {schedules[day]?.map((schedule, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 p-4 mb-4 border border-gray-300 rounded "
                    >
                      <div className="flex flex-col items-center ">
                        <p className="text-black font-bold ">
                          {schedule.subject}
                        </p>
                        <p className="text-gray-600 text-sm ">
                          {`${formatTime(schedule.starts)} - ${formatTime(
                            schedule.ends
                          )}`}
                        </p>
                      </div>
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
