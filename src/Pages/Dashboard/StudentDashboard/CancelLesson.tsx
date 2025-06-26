import { useEffect, useState } from "react";

export const CancelLesson = () => {
useEffect(() => {
  const el = document.getElementById("main-scroll") as HTMLElement | null;
  if (el) {
    el.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, []);

  const [selectedReason, setSelectedReason] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle cancel logic (update state or send to API)
  };
  return (
    <div className="p-6 bg-gray-50 ">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Cancel Lesson</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Lesson Details</h3>
          <p className="text-sm text-gray-500">English Conversation Practice</p>
          <p className="text-sm text-gray-500">With Sarah Johnson (4.9 stars)</p>
          <p className="text-sm text-gray-500">Scheduled for Today at 3:00 PM</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Reason for Cancellation</label>
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select Reason</option>
                <option value="scheduleConflict">Schedule conflict</option>
                <option value="personalEmergency">Personal emergency</option>
                <option value="feelingUnwell">Feeling unwell</option>
                <option value="technicalIssues">Technical issues</option>
                <option value="noLongerNeedLesson">No longer need the lesson</option>
                <option value="other">Other</option>
              </select>
            </div>

            {selectedReason === "other" && (
              <div>
                <label className="block text-sm font-medium">Additional Details</label>
                <textarea
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Provide additional details..."
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                required
              />
              <span className="text-sm">
                I understand the cancellation policy and confirm I want to cancel this lesson.
              </span>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-md"
            >
              Cancel Lesson
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
