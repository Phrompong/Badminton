import { Form, Input, Modal } from "antd";
import { FC, useEffect, memo, useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../footer";
import Title from "../title";
import { KeyRound } from "lucide-react";
import { ModalCustom } from "./modal";

interface IEnterSessionModalProps {
  open: boolean;
  onCancel: () => void;
}

const EnterSessionModal: FC<IEnterSessionModalProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open, form]);

  const handleSubmitForm = useCallback(
    (values: any) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set("code", values.sessionKey);
      router.replace(`?${params.toString()}`);
      onCancel?.();
    },
    [searchParams, router, onCancel],
  );

  return (
    <ModalCustom
      titleHeader="เข้าสู่เซสชัน"
      iconHeader={<KeyRound className="w-5 h-5" />}
      open={open}
      footerCustom={
        <Footer text="เข้าสู่เซสชัน" handleClickSubmit={() => form.submit()} />
      }
      width={400}
      onCancel={onCancel}
    >
      <Form form={form} onFinish={handleSubmitForm}>
        <Form.Item<string>
          label=""
          name="sessionKey"
          style={{
            marginBottom: 0,
          }}
          rules={[{ required: true, message: "กรุณากรอกชื่อเซสชัน" }]}
        >
          <Input className="w-full h-14" placeholder="กรุณากรอกชื่อเซสชัน" />
        </Form.Item>
      </Form>
    </ModalCustom>
  );
};

export default memo(EnterSessionModal);
