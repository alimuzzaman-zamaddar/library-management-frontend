import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StudentOnboardingLayout } from "./StudentOnboardingLayout";

const timezones = [
  { value: "UTC", label: "UTC (GMT+0)" },
  { value: "Asia/Dhaka", label: "Asia/Dhaka (GMT+6)" },
  { value: "Asia/Kolkata", label: "Asia/Kolkata (GMT+5:30)" },
  { value: "America/New_York", label: "America/New_York (GMT-4)" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles (GMT-7)" },
  { value: "Europe/London", label: "Europe/London (GMT+1)" },
  { value: "Europe/Berlin", label: "Europe/Berlin (GMT+2)" },
  { value: "Asia/Tokyo", label: "Asia/Tokyo (GMT+9)" },
  { value: "Australia/Sydney", label: "Australia/Sydney (GMT+10)" },
  { value: "Africa/Nairobi", label: "Africa/Nairobi (GMT+3)" },
  { value: "America/Sao_Paulo", label: "America/Sao_Paulo (GMT-3)" },
  { value: "Asia/Dubai", label: "Asia/Dubai (GMT+4)" },
  { value: "Asia/Shanghai", label: "Asia/Shanghai (GMT+8)" },
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Bangladesh",
  "India",
  "Germany",
  "Australia",
  "France",
  "Japan",
  "Brazil",
  "China",
  "South Korea",
  "United Arab Emirates",
  "Pakistan",
  "Mexico",
  "Indonesia",
  "Nigeria",
  "South Africa",
  "Spain",
  "Italy",
];

const StudentOnboarding = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onChange" });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    methods.reset();
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <StudentOnboardingLayout step={step} totalSteps={4}>
        <form
          onSubmit={methods.handleSubmit(step === 4 ? onSubmit : next)}
          className="space-y-6"
        >
          {step === 1 && (
            <>
              <div data-aos="fade-up" className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    {...methods.register("firstName")}
                    placeholder="Enter First Name"
                    className="px-4 py-[14px] cursor-pointer border border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    {...methods.register("lastName")}
                    placeholder="Enter Last Name"
                    className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="Country/Region"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Country/Region
                </label>
                {/* Country Dropdown */}
                <select
                  {...methods.register("country")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="Timezone"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Timezone
                </label>
                <select
                  {...methods.register("timezone")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Timezone</option>
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
              <div data-aos="fade-up">
                <label
                  htmlFor="Timezone"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Languages you speak
                </label>
                <input
                  {...methods.register("languages")}
                  placeholder="English, Spanish, French"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac] w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple languages with commas
                </p>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div data-aos="fade-up" className="grid grid-cols-2 gap-4">
                {[
                  "English",
                  "French",
                  "Music",
                  "Programming",
                  "Photography",
                  "Art",
                  "English",
                  "French",
                  "Music",
                  "Programming",
                  "Photography",
                  "Art",
                ].map((subj) => (
                  <label key={subj} className="flex items-center gap-2">
                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        value={subj}
                        {...methods.register("subjects[]")}
                      />
                      <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)]   peer-checked:bg-[var(--button-bg-blue)]  peer-checked:border-white transition-all" />
                      <span className="text-sm text-gray-800">{subj}</span>
                    </label>
                  </label>
                ))}
              </div>
              <div data-aos="fade-up" className="">
                <label
                  htmlFor="Timezone"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Other subjects (optional)
                </label>
                <input
                  {...methods.register("otherSubjects")}
                  placeholder="Enter Other Subject You Interested In"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac] w-full"
                />
              </div>
              <div data-aos="fade-up" className="space-y-3">
                {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                  <label
                    key={lvl}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={lvl}
                      {...methods.register("level")}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{lvl}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <textarea
              data-aos="fade-up"
                {...methods.register("learningGoals")}
                placeholder="Enter your learning goals"
                className="border p-3 rounded-md w-full min-h-[100px]"
              />

              {/* Preferred learning style */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  What's your preferred learning style?
                </div>
                {[
                  "Interactive conversations",
                  "Structured lessons with exercises",
                  "Mix of both",
                ].map((style) => (
                  <label
                    key={style}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={style}
                      {...methods.register("preferredLearningStyle")}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{style}</span>
                  </label>
                ))}
              </div>

              {/* Learning Experience */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  Previous learning experience
                </div>
                {[
                  "No formal learning experience",
                  "Self-taught",
                  "Taken courses before",
                  "Learned in school/university",
                ].map((exp) => (
                  <label
                    key={exp}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={exp}
                      {...methods.register("learningExperience")}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{exp}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              {/* Availability checkboxes */}
              <div data-aos="fade-up" className="grid grid-cols-2 gap-4">
                {[
                  "Weekday mornings",
                  "Weekday afternoons",
                  "Weekday evenings",
                  "Weekend mornings",
                  "Weekend afternoons",
                  "Weekend evenings",
                ].map((slot) => (
                  <label
                    key={slot}
                    className="inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={slot}
                      {...methods.register("availability[]")}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-white transition-all" />
                    <span className="text-sm text-gray-800">{slot}</span>
                  </label>
                ))}
              </div>

              {/* Lesson Frequency */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  How often do you plan to take lessons?
                </div>
                {["1-3 times per week", "Every other week", "Monthly"].map(
                  (freq) => (
                    <label
                      key={freq}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={freq}
                        {...methods.register("lessonFrequency")}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                      <span className="text-gray-800">{freq}</span>
                    </label>
                  )
                )}
              </div>

              {/* Preferred Lesson Duration */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  Preferred lesson duration
                </div>
                {["30 minutes", "45 minutes", "60 minutes"].map((dur) => (
                  <label
                    key={dur}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={dur}
                      {...methods.register("lessonDuration")}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{dur}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          <div data-aos="fade-up" className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="text-gray-700 hover:text-white hover:bg-[var(--button-bg-blue)] duration-700 cursor-pointer border text-sm px-4 xl:px-15 py-[14px] rounded"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-[var(--button-bg-blue)] border border-[var(--button-bg-blue)] hover:bg-white duration-700 hover:text-[var(--button-bg-blue)] hover:border-[ver(--button-bg-blue)] cursor-pointer hover text-white text-sm px-6 xl:px-15 py-[14px] rounded ml-auto"
            >
              {step === 4 ? "Complete" : "Next"}
            </button>
          </div>
        </form>
      </StudentOnboardingLayout>
    </FormProvider>
  );
};

export default StudentOnboarding;
