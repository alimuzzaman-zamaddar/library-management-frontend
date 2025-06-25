import { Link } from "react-router-dom";



type navLinksSchema = {
  label: string;
  redirectLink: string;
};

const navLink: navLinksSchema[] = [
  {
    label: "Refund Policy ",
    redirectLink: "/refund-policy",
  },
  {
    label: "Privacy Policy  ",
    redirectLink: "/privacy-policy",
  },
  {
    label: "Guidelines",
    redirectLink: "/guidelines",
  },
  {
    label: "Help ",
    redirectLink: "/help",
  },
];

const DashboardFooter = () => {
  return (
    <footer className="h-auto w-auto shadow-md  bg-white py-4 container rounded-[8px] border-[1px] border-solid border-alt-border  ">
      <div className="  flex flex-row justify-between items-center px-10  ">
        <p className="text-lg font-normal leading-[150%] text-primary-gray ">
          {" "}
          ©Copyright 2024. All Rights Reserved. Syntax Master{" "}
        </p>
        <ul className="flex flex-row gap-x-6 ">
          {navLink.map((link, idx) => {
            return (
              <li key={idx}>
                <Link
                  className="text-lg font-normal leading-[150%] "
                  to={link.redirectLink}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default DashboardFooter;
