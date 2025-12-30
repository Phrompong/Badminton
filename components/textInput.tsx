import { FC } from "react";

interface ITextInputProps {
  className?: string;
}

export const TextInput: FC<ITextInputProps> = ({ className }) => {
  return (
    <input type="text" className={`border rounded px-2 py-1 ${className}`} />
  );
};
