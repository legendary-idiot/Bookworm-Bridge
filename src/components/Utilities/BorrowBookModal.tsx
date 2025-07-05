import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import type { CreateBorrowBookRequest } from "@/interface/BookInterface";
import { useCreateBorrowBookMutation } from "@/redux/api/borrowBookApi";
import Swal from "sweetalert2";
import { BookOpen } from "lucide-react";

interface BorrowBookModalProps {
  bookId: string;
  bookTitle: string;
  availableCopies: number;
}

const BorrowBookModal = ({
  bookId,
  bookTitle,
  availableCopies,
}: BorrowBookModalProps) => {
  const [createBorrowBook, { isLoading }] = useCreateBorrowBookMutation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const form = useForm<CreateBorrowBookRequest>({
    defaultValues: {
      book: bookId,
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (data: CreateBorrowBookRequest) => {
    const formData = {
      ...data,
      dueDate: new Date(data.dueDate).toISOString(),
    };
    try {
      await createBorrowBook(formData).unwrap();
      Swal.fire({
        title: "Book borrowed successfully!",
        text: `You have borrowed ${data.quantity} copy(ies) of "${bookTitle}"`,
        icon: "success",
        confirmButtonText: "Great!",
      });
      form.reset();
      closeButtonRef.current?.click();
    } catch (error: unknown) {
      Swal.fire({
        title: "Failed to borrow book",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Calculate minimum due date (today + 1 day)
  const getMinDueDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  // Calculate maximum due date (today + 30 days)
  const getMaxDueDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-outline border btn-sm">
          <BookOpen className="w-4 h-4 mr-2" />
          Borrow Book
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Borrow Book
          </DialogTitle>
          <DialogDescription>
            Fill out the details below to borrow "{bookTitle}". You can borrow
            up to {availableCopies} copy(ies).
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: "Quantity is required",
                min: {
                  value: 1,
                  message: "Quantity must be at least 1",
                },
                max: {
                  value: availableCopies,
                  message: `Quantity cannot exceed available copies (${availableCopies})`,
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      min={1}
                      max={availableCopies}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              rules={{
                required: "Due date is required",
                validate: (value) => {
                  const selectedDate = new Date(value);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  if (selectedDate <= today) {
                    return "Due date must be after today";
                  }

                  const maxDate = new Date();
                  maxDate.setDate(maxDate.getDate() + 30);
                  if (selectedDate > maxDate) {
                    return "Due date cannot be more than 30 days from today";
                  }

                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      min={getMinDueDate()}
                      max={getMaxDueDate()}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

            <div className="flex justify-end gap-3 pt-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  ref={closeButtonRef}
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading} variant="outline">
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Borrowing...
                  </>
                ) : (
                  "Borrow Book"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBookModal;
