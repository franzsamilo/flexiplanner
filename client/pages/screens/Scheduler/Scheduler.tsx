import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AddSchedule from './AddSchedule';
import UpdateSchedule from './UpdateSchedule';
import DeleteSchedule from './DeleteSchedule';
import { Event } from '../Constants/types';
import editIcon from 'public/assets/icons/edit-icon.svg';
import deleteIcon from 'public/assets/icons/delete-icon.svg';

function Scheduler() {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [showUpdateSchedule, setShowUpdateSchedule] = useState(false);
  const [showDeleteSchedule, setShowDeleteSchedule] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Event | null>(null);
  const [schedules, setSchedules] = useState<{ [key: string]: Event[] }>({});
  const [isEditMode, setIsEditMode] = useState(false);

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

  function updateSchedule(updatedSchedule: Event) {
    setSchedules((prevSchedules) => {
      const daySchedules = prevSchedules[updatedSchedule.day];
      const updatedDaySchedules = daySchedules.map((schedule) =>
        schedule.event_id === updatedSchedule.event_id
          ? updatedSchedule
          : schedule
      );
      return { ...prevSchedules, [updatedSchedule.day]: updatedDaySchedules };
    });
    window.location.reload();
  }

  function toggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  function formatTime(timeStr: string) {
    const [hours, minutes, _] = timeStr.split(':');
    return `${hours}:${minutes}`;
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  useEffect(() => {
    fetch('http://localhost:6969/api/eventRead/read')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then((data) => {
        const weeklySchedules: { [key: string]: Event[] } = {};

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
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="px-2">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-row">
          <div className="text-lg text-black font-bold pt-1 px-4 rounded my-2 mr-auto text-[20px]">
            Class Schedule
          </div>
          <div className="ml-auto">
            <button
              className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-1 px-3 my-2 mr-3  rounded"
              onClick={handleAddEvent}
            >
              + Add Event
            </button>
            <button
              className="bg-[#7da27e] hover:bg-[#225224] text-white font-bold py-1 px-3 my-2 mr-3 rounded"
              onClick={toggleEditMode}
            >
              {isEditMode ? 'Done' : 'Edit Event'}
            </button>
          </div>

          {showAddSchedule && (
            <AddSchedule
              onClose={handleClose}
              addSchedule={addSchedule}
              existingSchedules={[]}
            />
          )}
          {showUpdateSchedule && (
            <UpdateSchedule
              onClose={handleClose}
              selectedSchedule={selectedSchedule!}
              updateSchedule={updateSchedule}
            />
          )}
          {showDeleteSchedule && (
            <DeleteSchedule
              onClose={handleClose}
              onDelete={handleClose}
              subject={selectedSchedule?.subject || ''}
            />
          )}
        </div>

        <div className="border border-gray-400 shadow rounded-[30px] p-4 min-h-[700px] bg-white ">
          <div className="grid grid-cols-7 gap-4 ">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <h4 className="font-bold px-4 md:px-10 py-2">{day}</h4>
                <div className="storage-area p-2 ">
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
                          {formatTime(schedule.starts)} -{' '}
                          {formatTime(schedule.ends)}
                        </p>
                        {isEditMode && (
                          <div className="flex flex-row w-10 mt-2">
                            <button
                              className="mr-auto"
                              onClick={() => {
                                setSelectedSchedule(schedule);
                                handleUpdateEvent();
                              }}
                            >
                              <Image src={editIcon} alt="edit icon" />
                            </button>
                            <button className="ml-auto">
                              <Image src={deleteIcon} alt="delete icon" />
                            </button>
                          </div>
                        )}
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
