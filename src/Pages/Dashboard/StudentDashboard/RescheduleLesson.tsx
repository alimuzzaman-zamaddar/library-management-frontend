import React from "react";
import { useForm, Controller } from "react-hook-form";

export const RescheduleLesson: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      selectedDate: "",
      selectedTime: "10:00 AM",
      reason: "",
    }
  });
  const selectedTime = watch("selectedTime");

  const onSubmit = (data: any) => {
    console.log("Reschedule data: ", data);
    // Handle reschedule logic (send to API or update state)
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-var(--color-primary-blue) font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7"
            />
          </svg>
          Back to Search
        </button>
        <h1 className="text-2xl font-semibold text-var(--color-primary-blue)">Reschedule Lesson</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Current Lesson */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-var(--color-primary-gray)">Current Lesson</h3>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-var(--color-primary-gray)"></div>
            <div className="ml-4">
              <p className="font-medium text-[var(--color-primary-black)]">Sarah Johnson</p>
              <p className="text-[var(--color-text-gray)]">English Conversation Practice</p>
              <p className="text-[var(--color-text-gray)]">Today at 3:00 PM | 60 min</p>
              <p className="mt-2 text-[var(--color-primary-green)]">⭐ 4.9</p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-text-gray)]">Lesson 12</p>
          <div className="mt-4 text-sm text-[var(--color-text-gray)] p-2 bg-[var(--color-secondary-white)] rounded-md">
            Free reschedule up to 4 hours before lesson
          </div>
        </div>

        {/* Right Column: Reschedule Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block text-[var(--color-primary-gray)]">Select Date</label>
              <Controller
                name="selectedDate"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="w-full p-3 border [border-var(--color-alt-border)] rounded-md"
                  />
                )}
              />
              {errors.selectedDate && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-6">
              <label className="block text-[var(--color-primary-gray)]">Available Time Slot</label>
              <div className="flex gap-4">
                {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"].map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`w-20 p-2 text-sm font-semibold border rounded-md ${selectedTime === time ? "bg-[var(--color-primary-blue)] text-white" : "bg-white"}`}
                    onClick={() => setValue("selectedTime", time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.selectedTime && <p className="text-red-500">Please select a time</p>}
            </div>

            <div className="mb-6">
              <label className="block text-var(--color-primary-gray)">Reason for Rescheduling (Optional)</label>
              <Controller
                name="reason"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full p-3 border border-[var(--color-alt-border)] rounded-md"
                    rows={4}
                    placeholder="Let your tutor know why you need to reschedule..."
                  />
                )}
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-[var(--color-text-gray)]">Your tutor will be notified about the reschedule request</p>
              <div className="space-x-4">
                <button type="button" className="px-6 py-2 bg-[var(--color-alt-gray)] rounded-md">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-[var(--color-primary-blue)] text-white rounded-md">Confirm Reschedule</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
