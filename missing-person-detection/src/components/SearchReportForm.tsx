import React, { useState } from 'react';

const SearchReportForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [reportDetails, setReportDetails] = useState({ name: '', description: '' });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleReportChange = (e) => {
        const { name, value } = e.target;
        setReportDetails({ ...reportDetails, [name]: value });
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Logic for searching missing persons
    };

    const handleReportSubmit = (e) => {
        e.preventDefault();
        // Logic for reporting a new case
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Search or Report Missing Person</h2>
            <form onSubmit={handleSearchSubmit} className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for a missing person"
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Search
                </button>
            </form>
            <form onSubmit={handleReportSubmit}>
                <input
                    type="text"
                    name="name"
                    value={reportDetails.name}
                    onChange={handleReportChange}
                    placeholder="Name of the missing person"
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                    required
                />
                <textarea
                    name="description"
                    value={reportDetails.description}
                    onChange={handleReportChange}
                    placeholder="Description"
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                    required
                />
                <button type="submit" className="bg-green-500 text-white rounded p-2">
                    Report Missing Person
                </button>
            </form>
        </div>
    );
};

export default SearchReportForm;