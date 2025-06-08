import Card from "./Card";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <Card className="p-6 flex flex-col items-center justify-center bg-[#66538D] border-[#66538D] cursor-pointer">
      <a
        href="https://linkedin.com/in/devnahtan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaLinkedin size={64} />
      </a>
    </Card>
  );
}
