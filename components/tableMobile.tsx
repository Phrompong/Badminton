import { Divider } from "antd";
import { Check, Edit2, Trash2 } from "lucide-react";
import { FC } from "react";

interface TableMobileProps {
  data: any[];
  className?: string;
  handleUpdateOnlineStatus: (playerId: string, isOnline: boolean) => void;
  handleClickPayment: (playerId: string) => void;
  handleClickEditPlayer: (playerId: string) => void;
}

const TableMobile: FC<TableMobileProps> = ({
  data,
  className,
  handleUpdateOnlineStatus,
  handleClickPayment,
  handleClickEditPlayer,
}) => {
  return (
    <div
      className={`flex flex-col border border-[#94a3b8] rounded-md sticky bg-white ${className}`}
    >
      {data.map((row) => (
        <div
          key={row.id}
          className="border-b p-4 last:border-0 flex flex-col gap-4"
        >
          <button
            onClick={() => handleUpdateOnlineStatus(row.id, !row.isOnline)}
            className={
              !row.isOnline
                ? "border border-slate-500 p-2 border-gray-100 rounded-md flex flex-row items-center gap-2  text-gray-600 hover:bg-gray-300 cursor-pointer w-[40%]"
                : "border bg-[#00BBA0] p-2 border-gray-100 rounded-md flex flex-row items-center gap-2  text-gray-600 hover:bg-[#009E87] cursor-pointer w-[40%]"
            }
          >
            {!row.isOnline ? (
              <>
                <div className="rounded-full border border-1 p-2 w-2 h-2"></div>
                <span>{row.isOnline ? "มาแล้ว" : "เช็คอิน"}</span>
              </>
            ) : (
              <>
                <Check className="text-white" />
                <span className="text-white">
                  {row.isOnline ? "มาแล้ว" : "เช็คอิน"}
                </span>
              </>
            )}
          </button>

          <div className="flex justify-between">
            <span className="font-bold text-xl">{row.name}</span>
            {row.isPaid ? (
              <span className="border border-1 w-auto rounded-md p-1 bg-green-100 text-green-700 border-green-200">
                ชำระแล้ว
              </span>
            ) : (
              <span className="border border-1 w-auto rounded-md p-1 bg-orange-100 text-orange-700 border-orange-200">
                รอชำระ
              </span>
            )}
          </div>

          <Divider style={{ borderColor: "#94a3b8", marginBottom: 0 }} />

          <div className="grid grid-cols-[2fr_auto_auto] gap-2">
            <button
              onClick={() => handleClickPayment(row.id)}
              className="border  border-[#94a3b8] p-1 rounded-md hover:bg-[#DDF7F0] cursor-pointer"
            >
              <span className="text-[#324158] text-sm ">ดูค่าใช้จ่าย</span>
            </button>
            <button
              onClick={() => handleClickEditPlayer(row.id)}
              className="border  border-[#94a3b8] cursor-pointer p-1 hover:bg-[#DDE6FF] rounded-md"
            >
              <Edit2 className="text-[#5375EE] hover:text-[#000]" />
            </button>
            <button className="border  border-[#E7000B] cursor-pointer p-1 hover:bg-[#FAD1D1] rounded-md">
              <Trash2 className="text-[#E7000B] hover:text-[#000]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMobile;
