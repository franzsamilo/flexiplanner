import React, { useState } from "react";

interface UpdateScheduleProps {
  onClose: () => void;
  updateSchedule: (
    subject: string,
    attribute: string | number | Date,
    newValue: string | number | Date
  ) => void;
}

function UpdateSchedule({ onClose, updateSchedule }: UpdateScheduleProps) {
  const [updateData, setUpdateData] = useState({
    subject: "",
    attribute: "",
    newValue: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const updateEvent = async () => {
    try {
      const { subject, attribute, newValue } = updateData;

      const apiUrl = "http://localhost:6969/api/eventUpdate/update";

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          attribute: attribute,
          newValue: newValue,
        }),
      });

      if (response.ok) {
        console.log("Event updated successfully");
      } else {
        console.error("Failed to update event");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
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

  function handleUpdateSchedule() {
    const { subject, attribute, newValue } = updateData;
    if (subject && attribute) {
      let parsedValue: string | number | Date = newValue;

      if (attribute === "Starts" || attribute === "Ends") {
        parsedValue = new Date(`1970-01-01T${newValue}`);
      }

      updateSchedule(subject, attribute, parsedValue);
      onClose();
    }
  }

  const eventAttributes = [
    { name: "Day", type: "text" },
    { name: "Subject", type: "text" },
    { name: "Starts", type: "time" },
    { name: "Ends", type: "time" },
  ];

  let newValueComponent = null;

  switch (updateData.attribute) {
    case "Day":
      newValueComponent = (
        <select
          name="newValue"
          value={updateData.newValue}
          onChange={handleChange}
          className="border rounded w-full py-2 px-8"
        >
          <option value="">Select Day</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      );
      break;
    case "Starts":
    case "Ends":
      newValueComponent = (
        <select
          name="newValue"
          value={updateData.newValue}
          onChange={handleChange}
          className="border rounded w-full py-2 px-8"
        >
          <option value="">Select Time</option>
          {generateTimeOptions()}
        </select>
      );
      break;
    case "Subject":
    default:
      newValueComponent = (
        <input
          type="text"
          name="newValue"
          value={updateData.newValue}
          onChange={handleChange}
          className="border rounded w-full py-2 px-8"
        />
      );
      break;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Update Schedule</h2>

        <label className="block mb-2">
          Subject:
          <input
            type="text"
            name="subject"
            value={updateData.subject}
            onChange={handleChange}
            className="border rounded w-full py-2 px-8"
          />
        </label>

        <label className="block mb-2">
          Attribute to Edit:
          <select
            name="attribute"
            value={updateData.attribute}
            onChange={handleChange}
            className="border rounded w-full py-2 px-8"
          >
            <option value=""></option>
            {eventAttributes.map((attribute) => (
              <option key={attribute.name} value={attribute.name}>
                {attribute.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-2">
          New Value:
          {newValueComponent}
        </label>

        <div className="flex justify-end">
          <button
            onClick={updateEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Update Schedule
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
