"use client";
import { NavLink, useNavigate ,Link} from "react-router-dom";
import logo from "../assets/images/logo.png";
import Image from "../components/Tags/Image/Image";
import Button from "../components/Tags/Button/Button";

type navLinksScheam = {
  label: string;
  redirectLink: string;
};

const redirectLinkArr: navLinksScheam[] = [
  {
    label: "Home",
    redirectLink: "/",
  },
  {
    label: "Find tutors",
    redirectLink: "/find-a-tutor",
  },
  {
    label: "Become a Tutor",
    redirectLink: "/become-tutor",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-auto container flex flex-row justify-between items-center py-5 ">
      <Image
        onClick={() => {
          navigate("/");
        }}
        Src={logo}
        Alt="not found"
        className="w-[232px] cursor-pointer h-[54px] object-cover  "
      />
      <ul className="flex flex-row gap-x-8 items-center ">
        {redirectLinkArr.map((item, idx) => {
          return (
            <li data-aos="fade-up" data-aos-delay="100" key={idx}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link-label ${
                    isActive
                      ? "border-solid border-primary-gray  "
                      : "border-transparent"
                  }`
                }
                to={item.redirectLink}
              >
                {" "}
                {item.label}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Link to="/sign-up">
      <div className="flex flex-row items-center justify-between gap-x-4 ">
        <Button className="primary-btn" Txt={"Login"} />
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
