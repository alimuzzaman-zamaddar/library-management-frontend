import { useState } from "react";
import { useBorrowBookMutation } from "../../services/booksApi";


interface Props {
  bookId: string;
  maxCopies: number;
  onClose: () => void;
}

const BorrowModal: React.FC<Props> = ({ bookId, maxCopies, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async () => {
    if (quantity < 1 || quantity > maxCopies) {
      setError(`Please enter a quantity between 1 and ${maxCopies}`);
      return;
    }

    if (!dueDate) {
      setError("Please select a due date");
      return;
    }

    try {
      const res = await borrowBook({
        book: bookId,
        quantity,
        dueDate,
      }).unwrap();
      alert(res.message);
      onClose();
    } catch (err: any) {
      const msg = err?.data?.message || "Failed to borrow book.";
      setError(msg);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Borrow Book</h2>

        <label className="block mb-1 font-medium">Quantity:</label>
        <input
          type="number"
          min={1}
          max={maxCopies}
          value={quantity}
          onChange={e => {
            setQuantity(Number(e.target.value));
            setError(null);
          }}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <label className="block mb-1 font-medium">Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={e => {
            setDueDate(e.target.value);
            setError(null);
          }}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isLoading ? "Borrowing..." : "Borrow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowModal;
