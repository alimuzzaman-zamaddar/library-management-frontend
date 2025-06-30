import React from 'react';
import { useForm } from 'react-hook-form';

type FeedbackFormData = {
  feedback: string;
};

const Support: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FeedbackFormData>();

  const onSubmit = (data: FeedbackFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-[850px] mx-auto p-6 space-y-6 bg-bg-white border border-alt-border rounded-xl">
      <h2 className="text-2xl font-semibold">Support & Help</h2>

      <div className="grid grid-cols-2 gap-4">
        <button className="border text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">Report A Problem</button>
        <button className="border text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">View Guidelines</button>
        <button className="border text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">Contact Admin</button>
        <button className="border text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">Help Center</button>
      </div>

      {/* Feedback Box */}
      <div className="bg-blue-50 p-6 rounded-md">
        <h3 className="text-lg font-semibold text-secondary-blue">Confidential Feedback</h3>
        <p className="text-sm text-secondary-blue mb-4">
          Share your feedback with our admin team. This will be kept confidential.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Feedback</label>
            <textarea
              {...register('feedback', { required: true, maxLength: 500 })}
              className="w-full  border border-alt-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary-blue"
              rows={4}
              placeholder="Enter your feedback here..."
            />
            <div className="text-sm text-gray-500">
              {watch('feedback')?.length || 0}/500 characters
            </div>
            {errors.feedback && (
              <p className="text-red-500 text-sm">Feedback is required (max 500 characters).</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-secondary-blue cursor-pointer text-white px-6 py-2 rounded-md hover:bg-alt-border border-alt-border hover:text-primary-blue duration-500 transition"
          >
            Send Feedback
          </button>
        </form>
      </div>

      {/* Contact Box */}
      <div className="bg-white  border border-alt-border p-6 rounded-md shadow-sm">
        <h3 className="text-[24px] font-semibold mb-2">Need More Help?</h3>
        <p>
          <strong>Support Email:</strong>
          <span className="text-text-gray">support@tutorhub.com</span>
        </p>
        <p>
          <strong>Emergency Contact:</strong>
          <span className="text-text-gray">+1 (555) 123-4567</span>
        </p>
      </div>
    </div>

    
  );
};

export default Support;



// import React, { useState } from 'react';

// const SupportHelp: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('Report A Problem');
//   const [feedback, setFeedback] = useState('');
//   const [charCount, setCharCount] = useState(0);

//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//   };

//   const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const inputValue = e.target.value;
//     setFeedback(inputValue);
//     setCharCount(inputValue.length);
//   };

//   const handleFeedbackSubmit = () => {
//     // Handle feedback submission logic here (e.g., API call)
//     console.log('Feedback submitted:', feedback);
//   };

//   return (
//     <div className="container py-10">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         {/* Tabs Section */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
//           <button
//             className={`${
//               activeTab === 'Report A Problem' ? 'border border-alt-border-b-2  text-xs border-alt-border text-blue-500' : 'text-gray-600'
//             } py-2 px-4  font-semibold border  text-xs border-alt-border rounded-md`}
//             onClick={() => handleTabChange('Report A Problem')}
//           >
//             Report A Problem
//           </button>
//           <button
//             className={`${
//               activeTab === 'View Guidelines' ? 'border  text-xs border-alt-border text-blue-500' : 'text-gray-600'
//             } py-2 px-4  font-semibold border  text-xs border-alt-border rounded-md`}
//             onClick={() => handleTabChange('View Guidelines')}
//           >
//             View Guidelines
//           </button>
//           <button
//             className={`${
//               activeTab === 'Contact Admin' ? ' border text-xs border-alt-border text-blue-500' : 'text-gray-600'
//             } py-2 px-4  font-semibold border text-xs  border-alt-border rounded-md`}
//             onClick={() => handleTabChange('Contact Admin')}
//           >
//             Contact Admin
//           </button>
//           <button
//             className={`${
//               activeTab === 'Help Center' ? 'border text-xs border-alt-border text-blue-500' : 'text-gray-600'
//             } py-2 px-4  font-semibold border text-xs  border-alt-border rounded-md`}
//             onClick={() => handleTabChange('Help Center')}
//           >
//             Help Center
//           </button>
//         </div>

//         {/* Confidential Feedback Section */}
//         {activeTab === 'Report A Problem' && (
//           <div className="mb-8">

//             <h3 className="text-xl font-semibold text-xs text-text-gray mb-3">Confidential Feedback</h3>
//             <p className="text-gray-500 mb-4">Share your feedback with our admin team. This will be kept confidential.</p>
//             <textarea
//               value={feedback}
//               onChange={handleFeedbackChange}
//               className="w-full  border border-alt-border-gray-300 px-4 py-2 rounded-md"
//               rows={6}
//               maxLength={500}
//               placeholder="I'm a certified English teacher with 8+ years of experience. I specialize in business English and exam preparation."
//             />
//               <p>{charCount}/500 characters</p>
//             <div className="flex justify-between text-sm text-gray-500 mt-2">
            
//               <button
//                 onClick={handleFeedbackSubmit}
//                 className="bg-secondary-blue cursor-pointer text-white px-6 py-2 rounded-md hover:bg-alt-border border-alt-border hover:text-primary-blue duration-500 transition"
//               >
//                 Send Feedback
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Need More Help Section */}
//         <div className="bg-white  border border-alt-border p-6 rounded-md shadow-sm">
//           <h3 className="text-xl font-semibold text-text-gray mb-3">Need More Help?</h3>
//           <p className="text-gray-600">Support Email: <span className="text-blue-500">support@tutorhub.com</span></p>
//           <p className="text-gray-600">Emergency Contact: <span className="text-blue-500">+1 (555) 123-4567</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportHelp;
