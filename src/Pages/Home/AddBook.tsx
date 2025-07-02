import  { useState } from "react";
import { useAddBookMutation } from "../../services/booksApi";

// Define types based on the backend schema
export  interface BookData {
  title: string;
  author: string;
  genre:
    | "SCIENCE"
    | "FICTION"
    | "HISTORY"
    | "NON_FICTION"
    | "BIOGRAPHY"
    | "FANTASY"; 
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

const AddBook = () => {
  // Use mutation hook
  const [addBook] = useAddBookMutation();

  // Initialize state with type validation
  const [bookData, setBookData] = useState<BookData>({
    title: "",
    author: "",
    genre: "SCIENCE", // Default genre, can be changed
    isbn: "",
    description: "",
    copies: 0,
    available: true,
  });

  // Handle input change for each field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "title",
      "author",
      "genre",
      "isbn",
      "description",
      "copies",
    ];
    for (const field of requiredFields) {
      if (!bookData[field as keyof BookData]) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    // Check for valid genre (it should be one of the allowed enums)
    const validGenres = [
      "SCIENCE",
      "FICTION",
      "HISTORY",
      "FANTASY",
      "NON_FICTION",
      "BIOGRAPHY",
    ];
    if (!validGenres.includes(bookData.genre)) {
      alert("Invalid genre. Please choose a valid genre.");
      return;
    }

    // // Check if ISBN is a valid number or string format (you can enhance this)
    // if (bookData.isbn.length !== 13) {
    //   alert("ISBN must be a 13-character string.");
    //   return;
    // }

    try {
      const result = await addBook(bookData).unwrap();
      console.log("Book added successfully:", result);
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <select name="genre" value={bookData.genre} onChange={handleChange}>
        <option value="SCIENCE">SCIENCE</option>
        <option value="FICTION">FICTION</option>
        <option value="HISTORY">HISTORY</option>
        <option value="NON_FICTION">NON_FICTION</option>
        <option value="BIOGRAPHY">BIOGRAPHY</option>
        <option value="FANTASY">FANTASY</option>
      </select>
      <input
        type="text"
        name="isbn"
        value={bookData.isbn}
        onChange={handleChange}
        placeholder="ISBN"
      />
      <input
        type="text"
        name="description"
        value={bookData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="copies"
        value={bookData.copies}
        onChange={handleChange}
        placeholder="Copies"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
