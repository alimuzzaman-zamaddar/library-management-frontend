import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface RefundModalProps {
  onClose: () => void;
}

interface FormData {
  refundReason: string;
}

export const RefundModal = ({ onClose }: RefundModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Disable background scroll when modal is open
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Cleanup the effect to restore scrolling once the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle refund request logic (send to API or update state)
    onClose(); // Close the modal after submitting
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close modal if the backdrop (area outside the modal) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick} // Close modal when clicking outside
    >
      <div className="bg-white p-6 rounded-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Request Refund</h3>

        {/* Important Note */}
        <div className="bg-[#FFEEF0] text-[#FF6F61] p-3 mb-4 rounded-md">
          <p className="text-sm">Refunds are only available within 48 hours if no complaints are made against the tutor.</p>
        </div>

        {/* Lesson Details */}
        <div className="mb-6">
          <p className="font-medium text-gray-800">Lesson Details:</p>
          <p className="text-gray-600">Conversation Practice with Maria Garcia</p>
          <p className="text-gray-500">Yesterday</p>
        </div>

        {/* Refund Reason */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="refundReason" className="block text-sm text-gray-600 mb-2">
              Reason for Refund *
            </label>
            <select
              id="refundReason"
              {...register("refundReason", { required: "This field is required" })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a reason</option>
              <option value="qualityIssue">Quality issue with the lesson</option>
              <option value="tutorNoShow">Tutor did not show up</option>
              <option value="other">Other</option>
            </select>
            {errors.refundReason && (
              <p className="text-red-500 text-sm mt-1">{errors.refundReason.message}</p>
            )}
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
              className="bg-[#041345] text-white py-2 px-4 rounded-md"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
