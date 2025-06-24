import React from 'react';

interface TutorSignUpLayoutProps {
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

export const TutorSignUpLayout: React.FC<TutorSignUpLayoutProps> = ({ step, totalSteps, children }) => {
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">
            Step {step} of {totalSteps}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-900 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        {children}
      </div>
    </div>
  );
};
