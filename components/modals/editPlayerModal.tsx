import { getPlayerById, updatePlayerName } from "@/app/actions/player";
import { Form, FormInstance, message, Modal } from "antd";
import { FC, useEffect, useState } from "react";

interface IEditPlayerModalProps {
  playerId: string;
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
  form: FormInstance<any>;
  onCancel?: () => void;
}

const Footer: FC<IFooterProps> = ({ form, onCancel }) => {
  return (
    <div className="flex gap-2 w-full mt-6">
      <button
        onClick={onCancel}
        className="w-full border border-[#5EEAB4] rounded-md cursor-pointer p-2 hover:bg-[#EBFDF5]"
      >
        <span className="text-[#007A55]">ยกเลิก</span>
      </button>
      <button
        onClick={() => {
          form.submit();
        }}
        className="w-full  rounded-md cursor-pointer p-2 bg-[#009B60] hover:bg-[#007a53]"
      >
        <span className="text-white">บันทึก</span>
      </button>
    </div>
  );
};

const formItemStyle = { marginBottom: 12 };

const EditPlayerModal: FC<IEditPlayerModalProps> = ({
  open,
  onCancel,
  playerId,
}) => {
  const [form] = Form.useForm();
  const [playerInformation, setPlayerInformation] = useState<any>(null);

  const init = async () => {
    if (!playerId) return;
    setPlayerInformation(await getPlayerById(playerId));
  };

  useEffect(() => {
    setPlayerInformation(null);
    if (!open) return;
    init();
  }, [open, playerId]);

  if (!playerInformation) return null;

  const handleOnFinish = (vales: any) => {
    updatePlayerName(playerId, vales.name);
    message.success("บันทึกข้อมูลผู้เล่นเรียบร้อยแล้ว");
    onCancel();
  };

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={<Footer form={form} onCancel={onCancel} />}
    >
      <div className="mt-4">
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: playerInformation?.name || "",
          }}
          onFinish={handleOnFinish}
        >
          <Form.Item label="ชื่อ" name="name" style={formItemStyle}>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="กรอกชื่อ"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default EditPlayerModal;
