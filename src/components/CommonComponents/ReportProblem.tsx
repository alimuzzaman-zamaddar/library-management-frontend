import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FaAngleLeft } from "react-icons/fa";
import Heading from "../Tags/Heading/Heading";

interface FormData {
  subject: string;
  category: string;
  message: string;
}

const ReportProblem: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="">
      <button
        onClick={() => window.history.back()}
        className="bg-[#051345] border hover:border-alt-border hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
      >
        <FaAngleLeft /> Back to Search
      </button>
      <div className="max-w-[860px] mx-auto">
        <div className="mb-8">
          <Heading
            Txt="Report a Problem"
            className="text-secondary-black text-[32px] font-bold leading-[150%]"
            Variant="h3"
          />

          <p className="text-alt-gray text-[16px] font-normal leading-[24px] mt-2">
            Having an issue? Let us know and we'll help you resolve it quickly.
          </p>
        </div>

        <div className=" p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-[24px] text-secondary-black font-semibold mb-6">
            Problem Report Form
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Category Dropdown */}
            <div>
              <label
                htmlFor="Problem"
                className="block text-[16px] font-medium text-secondary-black"
              >
                Problem Type *
              </label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <select
                    id="category"
                    {...field}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select the Type Of Problem</option>
                    <option value="Technical">Technical</option>
                    <option value="Billing">Billing</option>
                    <option value="General">General</option>
                  </select>
                )}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-[16px] font-medium text-secondary-black"
              >
                Problem Description *
              </label>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <textarea
                    id="message"
                    {...field}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Describe the Type Of Problem"
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Button Group */}
            <div className="flex justify-end gap-4 items-center mt-4">
              <button
                type="button"
                className="hover:bg-primary-blue border border-alt-border bg-bg-white text-text-blue duration-700 hover:text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportProblem;
