import AvailableTeacher from "../../../components/Pages/FindTutors/AvailableTeacher";
import TutorsOrigin from "../../../components/Pages/Home/TutorsOrigin";

const FindTutor = () => {
  return (
    <section className="flex flex-col h-auto w-auto container ">
      <section className="bg-[#07123A] rounded-xl px-6 py-10 mt-5 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-20 gap-6">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl lg:text-[32px] font-semibold leading-snug">
              There are <span className="font-bold">3,785 tutors</span> ready to
              help you
              <br />
              succeed at work
            </h2>
          </div>

          {/* Right Search Box + Tags */}
          <div className="flex flex-1 flex-col gap-3 w-full">
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-md px-4 py-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
              <input
                type="text"
                placeholder="What would you like to learn"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Trending Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-white">Trending:</span>
              {["language", "Drawing", "Photography", "Artist"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-[#07123A] text-sm px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TutorsOrigin/>
      <AvailableTeacher/>
    </section>
  );
};

export default FindTutor;
