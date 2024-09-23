import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaFolder,
  FaUserInjured,
  FaFolderOpen,
  FaFolderClosed,
} from "react-icons/fa6";

const safetyStats = [
  {
    title: "Incidents",
    description: "Count of incidents",
    count: 1,
    icon: FaFolder,
  },
  {
    title: "Open",
    description: "Count of open incidents",
    count: 1,
    icon: FaFolderOpen,
  },
  {
    title: "Closed",
    description: "Count of closed incidents",
    count: 1,
    icon: FaFolderClosed,
  },
  {
    title: "LTIFR",
    description: "Lost time injury frequency rate",
    count: 1,
    icon: FaUserInjured,
  },
];

type CardProps = React.ComponentProps<typeof Card>;

const SafetyStatsItem: React.FC<{
  stat: (typeof safetyStats)[0];
  className?: string;
}> = ({ stat, className }) => (
  <Card className={cn("w-[200px]", className)}>
    <CardHeader>
      <CardTitle>{stat.title}</CardTitle>
      <CardDescription>{stat.description}</CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-3 gap-4">
      <div className="text-4xl">
        <stat.icon />
      </div>
      <div className="text-4xl">{stat.count}</div>
    </CardContent>
  </Card>
);

const SafetyStatsCounter: React.FC<CardProps> = ({ className, ...props }) => (
  <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mb-4">
    {safetyStats.map((stat, index) => (
      <div key={index} className="w-full md:w-[250px]">
        <SafetyStatsItem stat={stat} className={className} {...props} />
      </div>
    ))}
  </div>
);

export default SafetyStatsCounter;
