import React, { useState } from 'react';

const AadharForm: React.FC = () => {
    const [aadharNumber, setAadharNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle Aadhar number submission logic here
        console.log('Aadhar Number Submitted:', aadharNumber);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Aadhar Integration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">
                        Aadhar Number
                    </label>
                    <input
                        type="text"
                        id="aadhar"
                        value={aadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                        placeholder="Enter your Aadhar Number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AadharForm;