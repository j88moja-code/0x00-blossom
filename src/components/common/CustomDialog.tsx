import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import React from "react";

interface CustomDialogProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose(); // Close the dialog after confirming
  };

  return (
    <Dialog onOpenChange={onClose} open={open} modal defaultOpen={open}>
      <DialogContent className="sm:max-w-md" aria-describedby={title}>
        <DialogHeader className="flex">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea>
          <DialogDescription>{content}</DialogDescription>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="default" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
