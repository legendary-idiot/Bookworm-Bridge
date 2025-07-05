// Define the Book interface
export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Define the CreateBookRequest interface (without _id)
export interface CreateBookRequest {
  title: string;
  author: string;
  genre: Book["genre"];
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}

// UpdateBookRequest interface (all fields optional except _id)
export interface UpdateBookRequest {
  _id: string;
  title?: string;
  author?: string;
  genre?: Book["genre"];
  isbn?: string;
  description?: string;
  copies?: number;
  available?: boolean;
}
