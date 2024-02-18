import React, { useState } from 'react';

const CertificationForm = ({onSave, initialCertification = { cert: ''} }) => {
    const [cert, setCert] = useState(initialCertification);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCert({ ...cert, [name]: value })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(cert);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="certification">Certification</label>
                <input 
                    type="text"
                    name="certification"
                    id="certification"
                    value={cert.cert}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save Certifications
            </button>
        </form>
    );
};

export default CertificationForm;