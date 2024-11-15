import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex text-gray-500 hover:underline items-center gap-1 font-bold mb-5"
    >
      <ArrowLeftCircle size={18} />
      <span>{text}</span>
    </Link>
  );
};
