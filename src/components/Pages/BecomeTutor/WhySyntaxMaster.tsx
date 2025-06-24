import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Image from "../../Tags/Image/Image";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import itGirl from "../../../assets/images/tutors/it-girl.png"
import features from "../../../assets/images/features.png"

const WhySyntaxMaster = () => {
  return (
    <section className="h-auto w-full pb-[120px] flex flex-col gap-y-[60px]  items-center    ">
      <div className="flex flex-col items-center gap-y-4 container ">
        <Heading
          Variant="h4"
          Txt={`Why Teach with Syntax Master`}
          className="common-heading "
        />
        <Paragraph
          className="common-sub-heading"
          Txt={
            "Join thousands of tutors who have transformed their passion into a thriving career"
          }
        />
      </div>
      <div className="flex flex-col gap-y-6 items-center ">
        <div className="flex flex-row gap-x-[280px] items-center ">
          <div className="flex flex-col gap-y-6 ">
            <Image
              className="h-[617px] scale-x-[-1] w-[526px] object-cover "
              Alt="not found"
              Src={itGirl}
            />
            <Button Txt={`Apply as a Tutor`} className="primary-btn !w-full" />
          </div>
          <Image
            className="h-[526px]  w-[564px] object-contain "
            Alt="not found"
            Src={features}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySyntaxMaster;
