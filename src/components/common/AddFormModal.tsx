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

interface AddFormModalProps {
  open: boolean;
  disabled?: boolean;
  onClose: () => void;
  title: string;
  onSubmit: SubmitHandler<any>;
  isSubmitting?: boolean;
  children: React.ReactNode;
}

const AddFormModal: React.FC<AddFormModalProps> = ({
  open,
  disabled,
  onClose,
  title,
  onSubmit,
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
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="flex flex-col gap-2 mt-2 mr-4">{children}</div>

              <DialogFooter className="flex justify-center mr-4">
                {/* <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button> */}
                <Button
                  type="submit"
                  variant="default"
                  disabled={isSubmitting || disabled}
                >
                  {isSubmitting ? (
                    <span className="spinner-loader"></span>
                  ) : (
                    "Submit"
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

export default AddFormModal;
