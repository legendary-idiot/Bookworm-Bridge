import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateBookForm from "./UpdateBookForm";

function UpdateBookModal({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-warning border-none btn-sm">Update</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book Details</DialogTitle>
          <DialogDescription>
            Make changes to the book details. Click update when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>

        <UpdateBookForm id={id} />
      </DialogContent>
    </Dialog>
  );
}

export default UpdateBookModal;
