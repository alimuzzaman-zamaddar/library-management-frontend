

const TransactionHistory: React.FC = () => {
  const data = [
    {
      date: "May 24, 2023",
      amount: "$100",
      status: "Completed",
      method: "Payoneer",
    },
    {
      date: "May 24, 2023",
      amount: "$200",
      status: "Completed",
      method: "Payoneer",
    },
    {
      date: "May 24, 2023",
      amount: "$50",
      status: "Pending",
      method: "Payoneer",
    },
    {
      date: "May 24, 2023",
      amount: "$125",
      status: "Completed",
      method: "PayPal",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-sm text-lg font-semibold">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <select className=" p-1 rounded-md border text-[16px] border-alt-border">
          <option>This Week</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
      </div>
      <table className="min-w-full text-sm text-left text-text-gray">
        <thead className="">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-900">Date</th>
            <th className="px-4 py-2 font-medium text-gray-900">Amount</th>
            <th className="px-4 py-2 font-medium text-gray-900">Status</th>
            <th className="px-4 py-2 font-medium text-gray-900">Method</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-t-alt-border">
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.amount}</td>
              <td
                className={`px-4 py-2 ${
                  item.status === "Completed"
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2">{item.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
