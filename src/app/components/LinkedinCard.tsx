import Card from "./Card";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <Card
      variant="purple"
      className="p-6 flex flex-col items-center justify-center cursor-pointer bg-[#1a1a1ab3] hover:bg-[#66538D] transition duration-300"
    >
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
