import { useGetBorrowSummaryQuery } from "../../services/booksApi";


const BorrowSummary = () => {
  const { data, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading) return <div>Loading summary...</div>;
  if (error) return <div>Error fetching borrow summary.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Borrow Summary</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Title</th>
            <th className="text-left p-2 border">ISBN</th>
            <th className="text-left p-2 border">Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{item.book.title}</td>
              <td className="p-2 border">{item.book.isbn}</td>
              <td className="p-2 border">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
