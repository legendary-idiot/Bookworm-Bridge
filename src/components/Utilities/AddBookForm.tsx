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
import type { CreateBookRequest } from "@/interface/BookInterface";
import { useCreateBookMutation } from "@/redux/api/booksApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddBookForm = () => {
  const [addBook, { isLoading }] = useCreateBookMutation();
  const navigate = useNavigate();
  const form = useForm<CreateBookRequest>({
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      description: "",
      copies: 0,
    },
  });
  const onSubmit = async (data: CreateBookRequest) => {
    const bookData: CreateBookRequest = {
      ...data,
      available: data.copies > 0,
    };
    try {
      await addBook(bookData).unwrap();
      Swal.fire({
        title: "Book added successfully",
        icon: "success",
      });
      form.reset();
      navigate("/all-books");
    } catch (error) {
      Swal.fire({
        title: "Failed to add book",
        icon: "error",
      });
    }
  };
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
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Submit"}
        </button>
      </form>
    </Form>
  );
};

export default AddBookForm;
