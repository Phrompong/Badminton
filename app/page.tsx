"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import EditPlayerModal from "@/components/modals/editPlayerModal";
import { ImportPlayerModal } from "@/components/modals/importPlayerModal";
import PaymentModal from "@/components/modals/paymentModal";
import RandomPlayerModal from "@/components/modals/randomPlayerModal";
import SettingModal from "@/components/modals/settingModal";
import Table from "@/components/table";
import TableMobile from "@/components/tableMobile";
import { TextInput } from "@/components/textInput";
import { Settings, Shuffle, UserPlus } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";

const cards = [
  { title: "Total Players", total: 120 },
  { title: "Present", total: 85 },
  { title: "Paid", total: 15 },
  { title: "Unpaid", total: 3 },
  { title: "Courts", total: 10 },
];

const data = [
  {
    id: 1,
    status: "เช็คอิน",
    name: "สมชาย ใจดี",
    level: "กลาง",
    games: 10,
    payment: "ชำระแล้ว",
  },
  {
    id: 2,
    status: "เช็คอิน",
    name: "มะลิ ตั้งใจ",
    level: "เริ่มต้น",
    games: 5,
    payment: "ค้างชำระ",
  },
];

export default function Home() {
  const [isImportModalPlayerOpen, setIsImportModalPlayerOpen] =
    useState<boolean>(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState<boolean>(false);
  const [isRandomPlayerModalOpen, setIsRandomPlayerModalOpen] =
    useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isEditPlayerModalOpen, setIsEditPlayerModalOpen] =
    useState<boolean>(false);

  const handleClickPayment = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClickEditPlayer = () => {
    setIsEditPlayerModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <header className="bg-[#1C2638] w-screen top-0 shadow-xl p-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
            <span className="text-white">Badminton</span>
            <div className="flex justify-start gap-2">
              <Button
                text="Import"
                Icon={UserPlus}
                onClick={() => setIsImportModalPlayerOpen((prev) => !prev)}
              />
              <Button
                text="Setting"
                Icon={Settings}
                onClick={() => setIsSettingModalOpen((prev) => !prev)}
              />
              <Button
                text="Random"
                Icon={Shuffle}
                onClick={() => setIsRandomPlayerModalOpen((prev) => !prev)}
              />
            </div>
          </div>
        </header>
        <main className="p-1">
          <div className="max-w-7xl mx-20 mx-auto flex flex-col gap-6">
            <div className="flex justify-center h-[56px]">
              <TextInput className="w-[50%]" />
            </div>
            <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 justify-stretch">
              {cards.map(({ title, total }) => (
                <Card key={title} title={title} total={total} />
              ))}
            </section>
            {/* Table Section */}
            <Table
              data={data}
              className="hidden lg:table"
              handleClickPayment={handleClickPayment}
              handleClickEditPlayer={handleClickEditPlayer}
            />
            <TableMobile
              data={data}
              className="block lg:hidden"
              handleClickPayment={handleClickPayment}
              handleClickEditPlayer={handleClickEditPlayer}
            />
          </div>
        </main>
      </div>

      <ImportPlayerModal
        open={isImportModalPlayerOpen}
        onCancel={() => {
          setIsImportModalPlayerOpen(false);
        }}
      />

      <SettingModal
        open={isSettingModalOpen}
        onCancel={() => setIsSettingModalOpen(false)}
      />

      <RandomPlayerModal
        open={isRandomPlayerModalOpen}
        onClose={() => setIsRandomPlayerModalOpen(false)}
      />

      <PaymentModal
        open={isPaymentModalOpen}
        onCancel={() => setIsPaymentModalOpen(false)}
      />

      <EditPlayerModal
        open={isEditPlayerModalOpen}
        onCancel={() => setIsEditPlayerModalOpen(false)}
      />
    </>
  );
}
