import { FC } from "react";
import { XCircle } from "lucide-react";

interface ITitleProps {
  icon?: React.ReactNode;
  text: string;
  onCancel?: () => void;
}

const Title: FC<ITitleProps> = ({ icon, text, onCancel }) => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex flex-row  justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xl">{text}</span>
        </div>
        <div>
          <XCircle className="w-5 h-5 cursor-pointer" onClick={onCancel} />
        </div>
      </div>
      <div className="border border-gray-100"></div>
    </div>
  );
};

export default Title;
