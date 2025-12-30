import { Form, Modal } from "antd";
import { FC } from "react";

interface IEditPlayerModalProps {
  open: boolean;
  onCancel: () => void;
}

const title = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl">Edit Player</span>
      <span className="text-xs">แก้ไขข้อมูลผู้เล่น </span>
    </div>
  );
};

interface IFooterProps {
  onCancel?: () => void;
}

const Footer: FC<IFooterProps> = ({ onCancel }) => {
  return (
    <div className="flex gap-2 w-full mt-6">
      <button
        onClick={onCancel}
        className="w-full border border-[#5EEAB4] rounded-md cursor-pointer p-2 hover:bg-[#EBFDF5]"
      >
        <span className="text-[#007A55]">ยกเลิก</span>
      </button>
      <button className="w-full  rounded-md cursor-pointer p-2 bg-[#009B60] hover:bg-[#007a53]">
        <span className="text-white">บันทึก</span>
      </button>
    </div>
  );
};

const formItemStyle = { marginBottom: 12 };

const EditPlayerModal: FC<IEditPlayerModalProps> = ({ open, onCancel }) => {
  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={<Footer onCancel={onCancel} />}
    >
      <div className="mt-4">
        <Form layout="vertical">
          <Form.Item label="ชื่อ-นามสกุล" name="name" style={formItemStyle}>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="กรอกชื่อ-นามสกุล"
            />
          </Form.Item>

          <Form.Item label="ระดับความสามารถ" name="level" style={formItemStyle}>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="">เลือกระดับ</option>
              <option value="beginner">เริ่มต้น</option>
              <option value="intermediate">กลาง</option>
              <option value="advanced">สูง</option>
            </select>
          </Form.Item>

          <Form.Item
            label="จำนวนเกม"
            name="numberOfGames"
            style={formItemStyle}
          >
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="กรอกจำนวนเกม"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default EditPlayerModal;
