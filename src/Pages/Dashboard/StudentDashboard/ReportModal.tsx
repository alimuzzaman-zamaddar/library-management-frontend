import { useState } from "react";

interface ReportModalProps {
  onClose: () => void;
}

export const ReportModal = ({ onClose }: ReportModalProps) => {
  const [reportReason, setReportReason] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report submission logic
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h3 className="text-lg font-semibold mb-4 text-red-600">Report User</h3>
        <p className="text-sm text-gray-500 mb-4">
          You are reporting: <span className="font-semibold text-gray-800">David Chen</span>
        </p>
        <p className="text-xs text-gray-400 mb-6">
          Reports are reviewed by our admin team. False reports may result in account restrictions.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Reason for Report */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2">Reason for Report *</label>
            <select
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select violation type</option>
              <option value="abusiveLanguage">Abusive language</option>
              <option value="inappropriateContent">Inappropriate content</option>
              <option value="harassment">Harassment</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Provide details about the violation..."
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-md"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
