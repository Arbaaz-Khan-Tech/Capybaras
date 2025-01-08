import React from 'react';

const CaseStatus = ({ cases }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Case Status Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cases.map((caseItem) => (
                    <div key={caseItem.id} className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-semibold">{caseItem.name}</h3>
                        <p className="text-gray-600">Status: {caseItem.status}</p>
                        <p className="text-gray-500">Progress: {caseItem.progress}</p>
                        <p className="text-gray-400">Last Updated: {caseItem.lastUpdated}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStatus;