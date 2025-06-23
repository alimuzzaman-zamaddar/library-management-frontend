import Heading from "../Tags/Heading/Heading";
import Image from "../Tags/Image/Image";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "./../Tags/Button/Button";

interface BecomeATecherSchema {
  bgImgUrl: string;
  title?: string;
  subTitle: string;
  descreption: string;
  features?: string[];
  btnTxt: string;
  isHome: boolean;
}

const BecomeATecher: React.FC<BecomeATecherSchema> = ({
  bgImgUrl,
  title,
  subTitle,
  descreption,
  features,
  btnTxt,
  isHome,
}) => {
  return (
    <section className="h-auto relative w-auto container pb-[120px] ">
      <div
        className={`flex w-full relative flex-row ${
          isHome ? "max-h-[787px]" : "h-[553px]"
        } h-full w-auto `}
      >
        <Image
          Src={bgImgUrl}
          className=" rounded-tl-[12px] rounded-bl-[12px] object-cover"
          Alt="not found"
        />
        <div className="h-auto  w-auto py-[116px] bg-primary-blue relative px-8 flex flex-col rounded-tr-[12px] rounded-br-[12px]   gap-y-10">
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-col gap-y-3">
              {isHome && (
                <Heading
                  Txt={title}
                  Variant="h6"
                  className="text-2xl text-secondary-white font-[600] leading-[150%]"
                />
              )}
              <Heading
                Txt={subTitle}
                Variant="h3"
                className="text-[64px] text-secondary-white font-bold leading-[150%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8 ">
            <Paragraph
              className="max-w-[629px] text-lg text-secondary-white font-normal leading-[150%] "
              Txt={descreption}
            />
            {isHome && (
              <ul className="flex flex-col px-4 gap-y-3 ">
                {features?.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className=" list-disc text-secondary-white font-normal leading-[150%]  "
                    >
                      {item}
                    </li>
                  );
                })}
                <li className=" list-disc text-secondary-white font-normal leading-[150%]  ">
                  Set your own hourly rates and cash out your earnings anytime.
                </li>
              </ul>
            )}
            <Button className="linear-btn" Txt={btnTxt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeATecher;
