import { FC, useEffect, useRef } from "react";
import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface ICourtsProps {
  data: {
    id?: string;
    courtNo: number;
    courtName?: string;
  }[];
  handleRemoveCourt?: (courtId: string) => void;
  handleAddCourt?: () => void;
  handleChangeCourtName?: (courtId: string, value: string) => void;
  isEdit?: boolean;
}

const formItemStyle = { marginBottom: 16 };

const Courts: FC<ICourtsProps> = ({
  data,
  handleRemoveCourt,
  handleAddCourt,
  handleChangeCourtName,
  isEdit = false,
}) => {
  const form = Form.useFormInstance();

  useEffect(() => {
    if (!form) return;

    form.setFieldsValue({ courtNames: data });
  }, [data, form]);

  return (
    <div className="flex flex-col gap-2 bg-[#F0FDF9] p-2 rounded-md border-2 border-[#CAF9E2] mb-4">
      {data &&
        data.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[1fr_auto] gap-2 items-center w-full"
              key={item.courtNo}
            >
              <Form.Item
                name={["courtNames", index, "courtNo"]}
                initialValue={item.id}
                hidden
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["courtNames", index, "id"]}
                initialValue={item.id}
                hidden
              >
                <Input />
              </Form.Item>
              <Form.Item<string>
                key={item.courtNo}
                label={`สนามที่ ${index + 1}`}
                name={["courtNames", index, "courtName"]}
                style={formItemStyle}
                rules={[
                  {
                    required: true,
                    message: `กรุณากรอกชื่อสนามที่ ${item.courtNo}`,
                  },
                ]}
              >
                <Input
                  placeholder={`โปรดระบุชื่อสนาม`}
                  onChange={(e) =>
                    handleChangeCourtName?.(item.id || "", e.target.value)
                  }
                />
              </Form.Item>

              {isEdit && (
                <CloseOutlined
                  width={120}
                  style={{
                    cursor: "pointer",
                    color: "red",
                    width: "20px",
                  }}
                  onClick={() => {
                    if (!item.id) return;
                    handleRemoveCourt?.(item.id);
                  }}
                />
              )}
            </div>
          );
        })}
      <button
        type="button"
        onClick={() => handleAddCourt?.()}
        className="cursor-pointer group relative px-3 p-2 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
      >
        <svg
          className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span className="relative z-10">เพิ่มสนาม</span>
      </button>
    </div>
  );
};

export default Courts;
