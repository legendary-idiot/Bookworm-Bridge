import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateBookForm from "./UpdateBookForm";

function UpdateBookModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-warning border-none">Update</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book Details</DialogTitle>
          <DialogDescription>
            Make changes to the book details. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <UpdateBookForm />
      </DialogContent>
    </Dialog>
  );
}

export default UpdateBookModal;
