import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="max-w-sm mx-auto bg-white rounded-xl">
      <div className="flex items-center space-x-2 mb-5">
        <FaRegCalendarAlt className="text-xl text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-800">Select Date</h2>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={date => date && setSelectedDate(date)}
        inline
        calendarClassName="custom-calendar"
      />
    </section>
  );
};

export default Schedule;
