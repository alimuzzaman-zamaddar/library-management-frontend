import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Heading from "../../../../components/Tags/Heading/Heading";
import Paragraph from "../../../../components/Tags/Paragraph/Paragraph";

const Invoice: React.FC = () => {
  const invoiceData = {
    invoice_number: "INV-2024-001",
    generated_on: "2024-12-10",
    tutor_marketplace: {
      name: "TutorMarketpIace",
      address: "123 Education Street",
      city: "Learning City",
      zip: "LC 12345",
    },
    bill_to: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street. New York. NY 10001",
    },
    invoice: {
      date: "2024-12-10",
      due_date: "2024-12-10",
      invoice_number: "INV-2024-001",
      tutor: "Sarah Johnson",
      items: [
        {
          description: "English lesson with Sarah Johnson",
          amount: 25.0,
        },
      ],
      tax: 2.0,
      total: 27.0,
    },
    payment_info: {
      method: "Visa ending in 4242",
      transaction_id: "txn_1234567890",
      status: "Paid",
      paid_on: "2024-12-10",
    },
  };

  return (
    <div className="">
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto ">
          <div className="">
            <Heading
              Variant="h2"
              Txt={`Invoice ${invoiceData.invoice_number}`}
              className="text-[32px] font-semibold mb-1"
            />
            <Paragraph
              className="text-text-gray font-normal text-[16px]  leading-[150%] mb-8"
              Txt={`Generated on ${invoiceData.generated_on}`}
            />
          </div>

          {/* Invoice Header */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-5">
                    {invoiceData.tutor_marketplace.name}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {invoiceData.tutor_marketplace.address},{" "}
                    {invoiceData.tutor_marketplace.city},{" "}
                    {invoiceData.tutor_marketplace.zip}
                  </p>
                  <p className="text-sm text-gray-600">
                    Invoice Number: {invoiceData.invoice.invoice_number}
                  </p>
                  <p className="text-sm text-gray-600">
                    Date: {invoiceData.invoice.date}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    INVOICE
                  </h2>
                  <p className="text-sm text-gray-600">
                    Invoice Number: {invoiceData.invoice.invoice_number}
                  </p>
                  <p className="text-sm text-gray-600">
                    Date:{invoiceData.generated_on}
                  </p>
                  <p className="text-sm text-gray-600">
                    Due Date: {invoiceData.invoice.due_date}
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Info Section */}
            <div className="grid grid-cols-2 gap-8 mb-6 mt-8">
              <div>
                <h3 className="text-[16px] font-semibold text-gray-700 mb-5">
                  Bill To
                </h3>

                <p>{invoiceData.bill_to.name}</p>
                <p>{invoiceData.bill_to.email}</p>
                <p>{invoiceData.bill_to.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-5">
                  Tutor
                </h3>
                <p>{invoiceData.invoice.tutor}</p>
              </div>
            </div>

            {/* Invoice Items */}
            <div className="mb-6 mt-8">
              <div className="min-w-full table-auto border border-alt-border rounded-[8px]">
                <div className="">
                  <div className="bg-[#F2F2F2] py-3 px-3 flex justify-between items-center rounded-t-[8px]">
                    <p className="text-left text-gray-600">Description</p>
                    <p className="text-right text-gray-600">Amount</p>
                  </div>
                </div>
                <div>
                  {invoiceData.invoice.items.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-alt-border flex justify-between items-center py-3 px-3"
                    >
                      <p className="">{item.description}</p>
                      <p className="text-right">
                        ${item.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <div className=" flex justify-between items-center py-3 px-3">
                    <p className="font-semibold text-right">Tax</p>
                    <p className=" text-right">
                      ${invoiceData.invoice.tax.toFixed(2)}
                    </p>
                  </div>
                </div>
            {/* Total Section */}
            <div className="flex justify-between items-center  bg-[#F2F2F2] py-3 px-3 rounded-b-[8px]">
              <p className="text-lg font-semibold text-gray-700 ">Total:</p>
              <p className="text-lg font-semibold text-gray-700">
                Total: ${invoiceData.invoice.total.toFixed(2)}
              </p>
            </div>
              </div>
            </div>


            {/* Payment Information */}
            <div>
                <Heading  Txt="Payment Information" Variant="h3" className="text-2xl font-semibold text-gray-700 mb-2" />
              <h3 className="text-lg font-semibold text-gray-700 mb-5">
                
              </h3>
              <p className="text-gray-600">
                Payment Method: {invoiceData.payment_info.method}
              </p>
              <p className="text-gray-600">
                Transaction ID: {invoiceData.payment_info.transaction_id}
              </p>
              <p className="text-gray-600">
                Status: {invoiceData.payment_info.status}
              </p>
              <p className="text-gray-600">
                Paid On: {invoiceData.payment_info.paid_on}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-lg text-gray-500">
              <p className="mb-3">Thank you for choosing Syntax Master</p>
              <p>
                For questions about this invoice, contact
                support@tutormarketplace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
