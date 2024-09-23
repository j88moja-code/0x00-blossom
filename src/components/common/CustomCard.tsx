import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomCardProps {
  children?: React.ReactNode;
}

export default function CustomCard({ children }: CustomCardProps) {
  return (
    <Card className="rounded-lg border-none mt-6">
      <ScrollArea className="h-72 w-full">
        <CardContent className="p-4">
          <div className="grid w-full items-center gap-4 mx-4">{children}</div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
