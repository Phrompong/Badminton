import { updateIsPaidStatus } from "@/app/actions/player";
import { getPlayerCountInSession } from "@/app/actions/transactionRandom";
import { Divider, message, Modal } from "antd";
import React, { useEffect } from "react";

const title = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl">Payment Summary</span>
      <span className="text-xs">สรุปค่าใช้จ่าย</span>
    </div>
  );
};

const footer = (handleConfirmPayment: () => void) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={handleConfirmPayment}
        className="bg-[#00A63D] p-2 rounded-md hover:opacity-80 cursor-pointer"
      >
        <span className="text-white">ยืนยันการชำระ</span>
      </button>
    </div>
  );
};

interface IPaymentModalProps {
  playerId: string;
  open: boolean;
  onCancel: () => void;
}

const PaymentModal: React.FC<IPaymentModalProps> = ({
  playerId,
  open,
  onCancel,
}) => {
  const [playerInformation, setPlayerInformation] = React.useState<any>(null);

  const init = async () => {
    const data = await getPlayerCountInSession(playerId);

    setPlayerInformation(data);
  };

  useEffect(() => {
    if (!open) return;
    init();
  }, [open]);

  if (!playerInformation) return null;

  const handleConfirmPayment = async () => {
    await updateIsPaidStatus(playerId, true);

    message.success("ชำระเงินเรียบร้อย");

    onCancel();
  };

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={footer(handleConfirmPayment)}
    >
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">
              {playerInformation?.playerInformation?.name}
            </span>
            <span>{playerInformation?.playerInformation?.level}</span>
          </div>
        </div>

        <Divider style={{ borderColor: "#94a3b8" }} />

        <div className="border border-[#D4F9E7] p-2 rounded-md flex flex-col gap-2 bg-[#EBFDF5]">
          <span className="font-bold text-md text-[#004E3B]">
            รายละเอียดค่าใช้จ่าย
          </span>

          <div className="flex justify-between">
            <span>จำนวนเกมที่เล่น</span>
            <span>{playerInformation?.countTransaction} เกม</span>
          </div>

          <div className="flex justify-between">
            <span>ค่าเล่นต่อเกม</span>
            <span>100 บาท</span>
          </div>
        </div>

        <div className="bg-[#00A150] flex justify-between items-center p-2 rounded-md w-full h-28">
          <span className="font-bold text-white text-xl">รวมทั้งหมด</span>
          <span className="font-bold text-white text-xl">
            {playerInformation?.countTransaction * 100} บาท
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
