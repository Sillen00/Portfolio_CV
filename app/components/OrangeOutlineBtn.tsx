import { twMerge } from "tailwind-merge";
import css from "./OrangeOutlineBtn.module.scss";

interface OrangeOutlineBtnProps {
  className?: string;
  children: React.ReactNode;
}

const OrangeOutlineBtn: React.FC<OrangeOutlineBtnProps> = ({ className, children }) => {
  return (
    <button className={twMerge(className, css.btn, "border-secondary-color border-2 rounded-md text-secondary-color")}>
      {children}
    </button>
  );
};

export default OrangeOutlineBtn;
