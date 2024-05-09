import { twMerge } from "tailwind-merge";

interface OrangeOutlineBtnProps {
  className?: string;
  children: React.ReactNode;
}

const OrangeOutlineBtn: React.FC<OrangeOutlineBtnProps> = ({ className, children }) => {
  return (
    <button className={twMerge(className, "border-secondary-color border-2 px-4 py-1.5 rounded-md text-secondary-color")}>
      {children}
    </button>
  );
};

export default OrangeOutlineBtn;
