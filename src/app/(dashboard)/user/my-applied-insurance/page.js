'use client';
import React, { useState } from 'react';

const Page = () => {
    const tableData = [
        { sl: 1, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 2, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 3, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 4, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 5, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 6, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 7, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 8, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 9, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 10, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 11, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
        { sl: 12, companyName: "Shell tech", insuranceType: "Property", completedTime: "11 Oct 24, 11:10PM", status: "Pending" },
    ];

    const itemsPerPage = 5; // Items per page
    const [currentPage, setCurrentPage] = useState(1); // Track the current page

    // Calculate total pages
    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    // Get the rows for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageData = tableData.slice(startIndex, startIndex + itemsPerPage);

    // Handle next page
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Handle previous page
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Handle specific page number click
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="md:p-6 p-2">
            <h2 className="text-3xl font-bold mb-6">Insurance Facilities Table</h2>

            <div className="overflow-x-auto md:w-auto w-[90vw] mx-auto">
                <table className="min-w-full table-auto border-collapse bg-gray-100 !rounded-2xl overflow-hidden border">
                    <thead>
                        <tr className="bg-black rounded-lg overflow-hidden text-[#dcb66b]">
                            <th className="px-6 py-5 text-left">#SL</th>
                            <th className="px-6 py-5 text-left">Company Name</th>
                            <th className="px-6 py-5 text-left">Insurance Facilities Type</th>
                            <th className="px-6 py-5 text-left">Completed Time & Date</th>
                            <th className="px-6 py-5 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4">{row.sl}</td>
                                <td className="px-6 py-4">{row.companyName}</td>
                                <td className="px-6 py-4">{row.insuranceType}</td>
                                <td className="px-6 py-4">{row.completedTime}</td>
                                <td className="px-6 py-4 text-blue-600">{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end mt-6">
                {/* Previous Button */}
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border cursor-pointer border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                    Prev
                </button>

                {/* Page Numbers */}
                <div className="px-4 py-2 text-lg text-gray-700">
                    Page {currentPage} of {totalPages}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 cursor-pointer rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                    Next
                </button>
            </div>


        </div>
    );
}

export default Page;