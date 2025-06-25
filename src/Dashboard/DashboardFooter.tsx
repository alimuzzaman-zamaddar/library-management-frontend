import Heading from "../components/Tags/Heading/Heading";
import Paragraph from "../components/Tags/Paragraph/Paragraph";


const DashboardFooter = () => {
  return (
    <footer className=" w-[95%] mx-auto bg-white rounded-lg border  border-[var(--color-alt-border)] my-8 px-6 py-6 flex flex-col md:flex-row items-end md:items-center justify-between">
      <div className="space-y-1 ">
        <Heading
          Txt="Have feedback for us?"
          className="text-lg font-semibold text-[var(--color-text-blue)]"
          Variant="h4"
        />
        <Paragraph
          Txt="Your feedback is anonymous unless you choose to include your name."
          className="text-sm font-medium text-[var(--color-text-gray)]"
        />
      </div>

      <button className="mt-4 md:mt-0 px-4 py-2 border border-[var(--color-text-blue)] text-[var(--color-text-blue)] rounded hover:bg-[var(--color-text-blue)] hover:text-white transition-all text-sm font-medium cursor-pointer duration-500">
        Confidential Feedback
      </button>
    </footer>
  );
};

export default DashboardFooter;
