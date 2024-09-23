import { Button } from "@/components/ui/button";
import {
  FaFileDownload,
  FaHourglassEnd,
  FaHourglassStart,
} from "react-icons/fa";
import { TbLogs } from "react-icons/tb";

interface Props {
  id: number;
  started: boolean;
  completed: boolean;
  handleNavigate: () => void;
  handleDownload: (id: number) => void;
}

export const LoggerAndDownload = ({
  id,
  started,
  completed,
  handleNavigate,
  handleDownload,
}: Props) => {
  if (!completed) {
    return (
      <Button variant="default" onClick={handleNavigate} disabled={!started}>
        <TbLogs /> eLogger
      </Button>
    );
  }
  return (
    <Button
      variant="outline"
      onClick={() => handleDownload(id)}
      disabled={!started || !completed}
    >
      <FaFileDownload />
      Download Report
    </Button>
  );
};

interface StartProps {
  started: boolean;
  completed: boolean;
  setOpenDialog: (open: boolean) => void;
  setOpenCompleteDialog: (open: boolean) => void;
}

export const StartAndEnd = ({
  setOpenDialog,
  setOpenCompleteDialog,
  started,
  completed,
}: StartProps) => {
  const handleButtonClick = (isStarted: boolean) => {
    if (isStarted) {
      setOpenCompleteDialog(true);
    } else {
      setOpenDialog(true);
    }
  };

  <Button
    variant="default"
    color={started ? "error" : "primary"}
    onClick={() => handleButtonClick(started)}
    disabled={completed}
  >
    {started ? <FaHourglassEnd /> : <FaHourglassStart />}
    {started ? "End" : "Start"}
  </Button>;
};
