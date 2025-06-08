import Card from "./Card";
import { FaGithub } from "react-icons/fa";

export default function GithubCard() {
  return (
    <Card className="p-6 flex flex-col items-center justify-center bg-[#66538D] border-[#66538D] cursor-pointer">
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
