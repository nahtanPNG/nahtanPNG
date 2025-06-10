"use client";

import Card from "./Card";
import { FaGithub } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

export default function GithubCard() {
  return (
    <Card
      variant="purple"
      className="col-span-1 p-6 flex bg-[#1a1a1ab3] card-glass transition duration-300 items-center"
    >
      <a
        href="https://github.com/nahtanpng"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 w-full cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-3">
          <FaGithub size={24} />
          <span className="text-body font-medium pixel-font">Github</span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <GitHubCalendar
            username="nahtanpng"
            blockSize={15}
            blockMargin={3}
            fontSize={11}
            hideColorLegend={false}
            hideMonthLabels={true}
            hideTotalCount={true}
            errorMessage="Erro ao carregar dados"
            transformData={(data) => {
              const weeksAgo = new Date();
              weeksAgo.setDate(weeksAgo.getDate() - 100);

              return data.filter((day) => {
                const dayDate = new Date(day.date);
                return dayDate >= weeksAgo;
              });
            }}
            throwOnError={false}
            theme={{
              light: ["#ebedf0", "#d6c8f7", "#b39ddb", "#9575cd", "#66538d"],
              dark: ["#1a1a1a", "#3d2c54", "#5a3e8c", "#7c5bbd", "#a18be6"],
            }}
            labels={{
              legend: {
                less: "menos",
                more: "mais",
              },
            }}
            weekStart={0}
            style={{
              fontSize: "11px",
            }}
          />
        </div>
      </a>
    </Card>
  );
}
