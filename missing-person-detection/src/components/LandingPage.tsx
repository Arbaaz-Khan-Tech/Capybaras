import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Missing Person Detection System</h1>
            <p className="text-lg mb-8 text-center">
                Our mission is to help locate missing persons quickly and efficiently. 
                Please report or search for missing individuals using the options below.
            </p>
            <div className="flex space-x-4">
                <a href="/report" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Report Missing Person
                </a>
                <a href="/search" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Search for Missing Person
                </a>
            </div>
        </div>
    );
};

export default LandingPage;