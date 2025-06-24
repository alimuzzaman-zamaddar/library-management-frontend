// pages/onboarding.tsx
import  { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TutorSignUpLayout } from './TutorSignUpLayout';


export default function Onboarding() {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: 'onChange' });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);
  const onSubmit = (data: any) => console.log('Final data:', data);

  return (
    <FormProvider {...methods}>
      <TutorSignUpLayout step={step} totalSteps={4}>
        <form onSubmit={methods.handleSubmit(step === 4 ? onSubmit : next)} className="space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold">Tutor Onboarding</h2>
              <p className="text-sm text-gray-500">Help us personalize your learning experience...</p>
              <div className="grid grid-cols-2 gap-4">
                <input {...methods.register('firstName')} placeholder="Enter First Name" className="border p-2 rounded" />
                <input {...methods.register('lastName')} placeholder="Enter Last Name" className="border p-2 rounded" />
              </div>
              <select {...methods.register('country')} className="border p-2 w-full rounded">
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
              <select {...methods.register('timezone')} className="border p-2 w-full rounded">
                <option value="">Select Timezone</option>
                <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
              </select>
              <input {...methods.register('languages')} placeholder="Languages you speak" className="border p-2 w-full rounded" />
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold">Teaching Information</h2>
              <input {...methods.register('subjects')} placeholder="Add Subject" className="border p-2 w-full rounded" />
              <select {...methods.register('experience')} className="border p-2 w-full rounded">
                <option value="">Years of Experience</option>
                <option value="0-1">0-1</option>
                <option value="2-5">2-5</option>
                <option value="5+">5+</option>
              </select>
              <textarea {...methods.register('education')} placeholder="Education Background" className="border p-2 w-full rounded" />
              <textarea {...methods.register('certifications')} placeholder="Certifications" className="border p-2 w-full rounded" />
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold">Create Profile</h2>
              <textarea {...methods.register('about')} placeholder="About Me" className="border p-2 w-full rounded" />
              <div className="grid grid-cols-2 gap-4">
                <input type="file" {...methods.register('photo')} className="border p-2 rounded" />
                <input type="file" {...methods.register('video')} className="border p-2 rounded" />
              </div>
              <p className="text-xs text-red-500">Max video length: 2 minutes</p>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-2xl font-semibold">Set Your Timezone & Availability</h2>
              <select {...methods.register('finalTimezone')} className="border p-2 w-full rounded">
                <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
              </select>
              <input {...methods.register('lessonPrice')} placeholder="Lesson Price ($)" className="border p-2 w-full rounded" />
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div key={day}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...methods.register(`availability.${day}.enabled`)} /> {day}
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <select {...methods.register(`availability.${day}.from`)} className="border p-1 rounded">
                      <option>10.00</option>
                    </select>
                    <select {...methods.register(`availability.${day}.to`)} className="border p-1 rounded">
                      <option>23.00</option>
                    </select>
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={prev} className="text-gray-700 border px-4 py-2 rounded">Back</button>
            )}
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded">
              {step === 4 ? 'Complete' : 'Next'}
            </button>
          </div>
        </form>
      </TutorSignUpLayout>
    </FormProvider>
  );
}
