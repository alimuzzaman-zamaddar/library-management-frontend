import { MessageButtonSvg } from "../../../components/SvgContainer/SVgContainer";

export interface Lesson {
  subject: string;
  instructor: string;
  time: string;
  status: string;
  statusColor: string;
  joinable: boolean;
}

export interface LessonCardProps {
  lesson: Lesson;
}

export const LessonCard = ({ lesson }: LessonCardProps) => (
  <div className="flex w justify-between gap-8 items-center p-4 border border-gray-200 rounded-lg">
    <div className="flex items-end justify-end space-x-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="student"
          className="h-14 w-15 rounded-lg"
        />
        <div>
          <p className="font-semibold text-lg text-gray-800">
            {lesson.subject}
          </p>
          <p className="text-sm text-gray-500">{`with ${lesson.instructor}`}</p>
          <p className="text-sm text-gray-500">{lesson.time}</p>
        </div>
      </div>
      <div className="">
        <span
          className={`text-sm px-4 py-1 rounded-full ${lesson.statusColor}`}
        >
          {lesson.status}
        </span>
      </div>
    </div>
    <div className="flex items-center justify-end space-x-4">
      <div className="flex items-center justify-end gap-4">
        <div className="bg-white cursor-pointer p-[6px] rounded-md border border-alt-border">
          <MessageButtonSvg />
        </div>
        {lesson.joinable && (
          <button className="bg-[#16A34A] hover:bg-white hover:text-primary-blue duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
            Join
          </button>
        )}
      </div>
    </div>
  </div>
);
