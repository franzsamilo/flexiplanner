import React, { useState } from "react";

interface UpdateScheduleProps {
  onClose: () => void;
}

function UpdateSchedule({ onClose }: UpdateScheduleProps) {
  const [updateData, setUpdateData] = useState({
    subject: "",
    attribute: "",
    newValue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateTimeOptions = () => {
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
  };

  const renderInputBasedOnAttribute = () => {
    const { attribute } = updateData;
    switch (attribute) {
      case "Day":
        return (
          <select
            name="newValue"
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
        );
      case "Starts":
      case "Ends":
        return (
          <select
            name="newValue"
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="">Select Time</option>
            {generateTimeOptions()}
          </select>
        );
      default:
        return (
          <input
            type="text"
            name="newValue"
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        );
    }
  };

  async function handleUpdate() {
    try {
      const response = await fetch(
        `http://localhost:6969/api/eventUpdate/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );

      if (response.ok) {
        console.log("Event updated successfully");
        onClose();
        window.location.reload();
      } else {
        console.error("Failed to update event");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Update Event</h2>
        <label className="block mb-2">
          <p className="my-1">Subject:</p>
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </label>
        <label className="block mb-2">
          <p className="my-1">Attribute to Update:</p>
          <select
            name="attribute"
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="">Select Attribute</option>
            <option value="Subject">Subject</option>
            <option value="Day">Day</option>
            <option value="Starts">Starts</option>
            <option value="Ends">Ends</option>
          </select>
        </label>
        <label className="block mb-2">
          <p className="my-1">New Value:</p>
          {renderInputBasedOnAttribute()}
        </label>
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
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
