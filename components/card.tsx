interface ICardProps {
  title: string;
  total: number;
}

export const Card: React.FC<ICardProps> = ({ title, total }) => {
  return (
    <div className="gap-4 flex flex-col border border-slate-200 border-2 p-4 rounded-xl w-full h-32 hover:shadow-lg">
      <span className="text-[#62748E]">{title}</span>
      <span className="text-xl font-semibold">{total}</span>
    </div>
  );
};

export default Card;
