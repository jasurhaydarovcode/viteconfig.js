import React, { useState } from 'react';

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const [copySuccess, setCopySuccess] = useState<string | null>(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(null), 1500);
        });
    };

    return (
        <div className="relative">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
                Copy
            </button>
            {copySuccess && <span className="absolute top-12 right-2 text-green-500">{copySuccess}</span>}
        </div>
    );
};

export default CopyButton;
