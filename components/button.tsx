import { FC } from "react";

interface ButtonProps {
  text: string;
  Icon?: React.FC<any>;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, Icon, onClick }) => {
  return (
    <button
      className="border border-1 p-2 bg-[#2D3646] rounded-md text-white flex gap-2 items-center align-center hover:bg-[#3a4561] cursor-pointer"
      onClick={onClick}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default Button;
