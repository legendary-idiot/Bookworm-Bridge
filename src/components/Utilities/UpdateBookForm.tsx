import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useRef } from "react";
import type { UpdateBookRequest } from "@/interface/BookInterface";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/api/booksApi";
import LoadingSpinner from "./LoadingSpinner";
import Swal from "sweetalert2";

const UpdateBookForm = ({ id }: { id: string }) => {
  const { data: book, isLoading, error } = useGetBookByIdQuery(id!);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const form = useForm<UpdateBookRequest>({
    defaultValues: {
      title: book?.title || "",
      author: book?.author || "",
      isbn: book?.isbn || "",
      genre: book?.genre,
      description: book?.description || "",
      copies: book?.copies || 0,
    },
  });

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const onSubmit = async (data: UpdateBookRequest) => {
    const bookData: UpdateBookRequest = {
      ...data,
      available: data.copies && data.copies > 0 ? true : false,
    };

    try {
      await updateBook({ ...bookData, _id: id }).unwrap();
      Swal.fire({
        title: "Book updated successfully",
        icon: "success",
      });
      form.reset();

      closeButtonRef.current?.click();
    } catch (error: unknown) {
      Swal.fire({
        title: error instanceof Error ? error.message : "Failed to update book",
        icon: "error",
      });
    }
  };
  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-2xl font-light text-rose-500 my-8">
        Sorry! Something went wrong.
      </div>
    );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          rules={{
            required: "Book Title is required",
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Book Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          rules={{
            required: "Author Name is required",
            minLength: {
              value: 3,
              message: "Author Name must be at least 3 characters long",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Author Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          rules={{ required: "Genre is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          rules={{ required: "ISBN is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="Enter ISBN" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          rules={{
            required: "Description is required",
            minLength: {
              value: 20,
              message: "Description must be at least 20 characters long",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter Description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="copies"
          rules={{
            required: "Copies is required",
            min: {
              value: 0,
              message: "Copies must be at least 0",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter Copies"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <button
          className="btn bg-yellow-200 hover:bg-yellow-300 text-black border-none w-full"
          type="submit"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Changes"}
        </button>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          {/* Hidden close button for programmatic closing after form submission */}
          <DialogClose asChild>
            <button ref={closeButtonRef} className="hidden" />
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default UpdateBookForm;
