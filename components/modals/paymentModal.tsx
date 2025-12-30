import { Divider, Modal } from "antd";

interface IPaymentModalProps {
  open: boolean;
  onCancel: () => void;
}

const title = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl">Payment Summary</span>
      <span className="text-xs">สรุปค่าใช้จ่าย</span>
    </div>
  );
};

const footer = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-[#00A63D] p-2 rounded-md hover:opacity-80 cursor-pointer">
        <span className="text-white">ยืนยันการชำระ</span>
      </button>
    </div>
  );
};

const PaymentModal: React.FC<IPaymentModalProps> = ({ open, onCancel }) => {
  return (
    <Modal title={title()} open={open} onCancel={onCancel} footer={footer()}>
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">ประยุทธ์ มั่นคง</span>
            <span>เริ่มต้น</span>
          </div>
        </div>

        <Divider style={{ borderColor: "#94a3b8" }} />

        <div className="border border-[#D4F9E7] p-2 rounded-md flex flex-col gap-2 bg-[#EBFDF5]">
          <span className="font-bold text-md text-[#004E3B]">
            รายละเอียดค่าใช้จ่าย
          </span>

          <div className="flex justify-between">
            <span>จำนวนเกมที่เล่น</span>
            <span>2 เกม</span>
          </div>

          <div className="flex justify-between">
            <span>ค่าเล่นต่อเกม</span>
            <span>100 บาท</span>
          </div>

          <div className="flex justify-between">
            <span>ค่าลูกขนไก่ต่อเกม</span>
            <span>50 บาท</span>
          </div>

          <Divider style={{ borderColor: "#008236", marginBottom: "0px" }} />

          <div className="flex justify-between">
            <span>รวมต่อเกม</span>
            <span>150 บาท</span>
          </div>
        </div>

        <div className="bg-[#00A150] flex justify-between items-center p-2 rounded-md w-full h-28">
          <span className="font-bold text-white text-xl">รวมทั้งหมด</span>
          <span className="font-bold text-white text-xl">300 บาท</span>
        </div>

        <span className="text-center text-xs mt-4 text-[#6A7282]">
          การคำนวณ: 3 เกม × 150 บาท = 450 บาท
        </span>
      </div>
    </Modal>
  );
};

export default PaymentModal;
