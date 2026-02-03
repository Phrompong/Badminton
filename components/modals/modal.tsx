import { FC } from "react";
import Title from "../title";

interface IModal {
  open: boolean;
  iconHeader?: React.ReactNode;
  titleHeader: string;
  children?: React.ReactNode;
  footerCustom: React.ReactNode;
  width?: number;
  onCancel?: () => void;
}

export const ModalCustom: FC<IModal> = ({
  open: isOpen,
  iconHeader,
  titleHeader,
  children,
  footerCustom,
  width,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {}}
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-opacity-60 backdrop-blur-xl transition-opacity duration-300"
    >
      <div
        className="relative m-4 p-4 rounded-lg bg-white shadow-sm flex flex-col gap-4"
        style={{ width: width ? `${width}px` : "80%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Title icon={iconHeader} text={titleHeader} onCancel={onCancel} />

        <div className="bg-red-100">{children}</div>

        {footerCustom}
      </div>
    </div>
  );
};
