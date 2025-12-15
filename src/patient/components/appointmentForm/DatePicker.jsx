import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export default function DatePicker({ value, onChange }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1 text-gray-700">
        Preferred Date
      </label>

      <div className="relative">
        <ReactDatePicker
          selected={value || null}
          onChange={(date) => onChange?.(date)}
          minDate={startOfToday()}
          placeholderText="dd-mm-yyyy"
          dateFormat="dd-MM-yyyy"
          className="w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
          calendarClassName="rounded-lg shadow-md border border-gray-200"
        />
      </div>
    </div>
  );
}
