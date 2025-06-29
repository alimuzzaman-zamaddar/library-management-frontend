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
  <div className="flex justify-between gap-8 items-center p-4 border border-gray-200 rounded-lg">
    <div className="flex items-end justify-end space-x-4">
<div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="student" className="h-14 w-15 rounded-lg" />
      <div>
        <p className="font-semibold text-lg text-gray-800">{lesson.subject}</p>
        <p className="text-sm text-gray-500">{`with ${lesson.instructor}`}</p>
        <p className="text-sm text-gray-500">{lesson.time}</p>
      </div>
</div>
<div className="">
      <span className={`text-sm px-4 py-1 rounded-full ${lesson.statusColor}`}>
        {lesson.status}
      </span>
</div>
    </div>
    <div className="flex items-center justify-end space-x-4">

      <div className="flex items-center justify-end gap-4">
        <div className="">
          <MessageButtonSvg/>
        </div>
      {lesson.joinable && (
        <button className="text-white bg-green-600 px-4 py-1 rounded-full text-sm">
          Join
        </button>
      )}
      </div>
    </div>
  </div>
);