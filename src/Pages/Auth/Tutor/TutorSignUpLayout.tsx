import React from 'react';

interface TutorSignUpLayoutProps {
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

const stepInfo = [
  {
    title: 'Tutor Onboarding',
    description: 'Help us personalize your learning experience. This information will help us match you with the right tutors.',
  },
  {
    title: 'Teaching Information',
    description: 'What subjects do you teach?',
  },
  {
    title: 'Create Your Profile',
    description: 'Tell students about yourself',
  },
  {
    title: 'Set your time zone ',
    description: 'A correct timezone is essential to coordinate lessons with international students',
  },
];

export const TutorSignUpLayout: React.FC<TutorSignUpLayoutProps> = ({
  step,
  totalSteps,
  children,
}) => {
  const currentStep = stepInfo[step - 1];
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen container flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-8 border border-[#DBE1E5] rounded-lg shadow-md">
        {/* Title + Description */}
        <div className="mb-6">
          <h2  data-aos="fade-up" className="text-[22px] xl:text-[32px] leading-[150%] font-bold text-gray-900 mb-4">{currentStep.title}</h2>
          <p  data-aos="fade-up" className="text-sm text-gray-500">{currentStep.description}</p>
        </div>

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

        {/* Dynamic Step Content */}
        {children}
      </div>
    </div>
  );
};

