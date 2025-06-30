import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);



  return (
    <section className=" rounded-lg shadow-lg ">
      {/* Date Picker Section */}
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 mr-4">Select Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => { if (date) setSelectedDate(date); }}
          dateFormat="MMMM d, yyyy"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Schedule;
