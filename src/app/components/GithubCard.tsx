import Card from "./Card";
import { FaGithub } from "react-icons/fa";

export default function GithubCard() {
  return (
    <Card
      variant="purple"
      className="p-6 flex flex-col items-center justify-center bg-[#1a1a1ab3] hover:bg-[#66538D] transition duration-300 cursor-pointer"
    >
      <a
        href="https://github.com/nahtanpng"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaGithub size={64} />
      </a>
    </Card>
  );
}
