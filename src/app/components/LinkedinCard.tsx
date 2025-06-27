import Card from "./Card";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <Card
      variant="purple"
      className="p-6 flex flex-col items-center justify-center bg-[#1a1a1ab3] hover:bg-[#66538d55] transition duration-300"
    >
      <a
        href="https://www.linkedin.com/in/nathanferreiradev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center cursor-pointer"
      >
        <FaLinkedin size={64} />
      </a>
    </Card>
  );
}
