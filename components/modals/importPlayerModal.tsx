import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

interface IImportPlayerModalProps {
  open?: boolean;
  onCancel?: () => void;
}

const title = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-semibold text-gray-900">
        Import Players
      </span>
      <span className="text-xs text-gray-600">
        คัดลอกรายชื่อจาก LINE มาวางได้เลย
      </span>
    </div>
  );
};

const footer = () => {
  return (
    <div className="flex justify-center w-full gap-2">
      <button className="border border-1 p-1 rounded-md w-full border-gray-400 hover:bg-gray-100">
        ล้างข้อมูล
      </button>
      <button className="border border-1 p-1 rounded-md w-full bg-[#00986E] text-white hover:bg-[#007a53]">
        น้ำข้อมูลเข้า
      </button>
    </div>
  );
};

export const ImportPlayerModal: FC<IImportPlayerModalProps> = ({
  open = false,
  onCancel,
}) => {
  return (
    <Modal title={title()} open={open} onCancel={onCancel} footer={footer()}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col border border-blue-300 p-4 rounded-md gap-6">
          <span className="text-sm">
            ตัวอย่างการ import ข้อมูลจาก line
            เพื่อมาทำรายชื่อและสามารถนำไปวางในช่องได้ล่างได้เลย
          </span>
        </div>

        <div>
          <span>รายชื่อผู้เล่น</span>
        </div>

        <TextArea />
      </div>
    </Modal>
  );
};
