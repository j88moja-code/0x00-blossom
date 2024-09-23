import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type SubmitHandler } from "react-hook-form";

interface EditFormModalProps {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  title: string;
  onSubmit: SubmitHandler<any>;
  isDirty?: boolean;
  isSubmitting?: boolean;
  children: React.ReactNode;
}

const EditFormModal: React.FC<EditFormModalProps> = ({
  open,
  onClose,
  onCancel,
  title,
  onSubmit,
  isDirty,
  isSubmitting,
  children,
}) => {
  return (
    <>
      <Dialog onOpenChange={onClose} open={open} modal defaultOpen={open}>
        <DialogContent className="sm:max-w-md" aria-describedby={title}>
          <DialogHeader className="flex">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[500px] w-full">
            {/* Remove the onSubmit from the form and move it to the save button */}
            <form className="space-y-8">
              <div className="flex flex-col gap-2 mt-2 mr-4">{children}</div>
              <DialogFooter className="flex justify-center mr-4">
                {/* Ensure the cancel button doesn't trigger form submission */}
                <Button onClick={onCancel} type="button" variant="secondary">
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="default"
                  onClick={onSubmit}
                  disabled={isSubmitting || !isDirty}
                >
                  {isSubmitting ? (
                    <span className="spinner-loader"></span>
                  ) : (
                    "Save"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditFormModal;
