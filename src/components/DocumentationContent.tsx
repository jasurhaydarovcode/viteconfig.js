import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { toast } from 'react-toastify';
import codeSnippets from '../API/codeSnippets.json';

interface CodeSnippet {
    type: string;
    title?: string;
    description: string;
    code: string;
    additionalDescription?: string;
    additionalCode?: string;
    note?: string;
    language?: string;
    icon?: string;
}

const DocumentationContent: React.FC = () => {
    const handleCopy = (code: string, language: string) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                toast.success(`${language} code copied to clipboard!`);
            })
            .catch(err => {
                toast.error(`Failed to copy ${language} code:`, err);
            });
    };

    const renderSection = (key: string, snippet: CodeSnippet) => {
        switch (snippet.type) {
            case 'extConfig':
                return (
                    <section id={key} className="mb-12" key={key}>
                        <h2 className={`text-3xl font-semibold mb-4 flex items-center gap-3 ${snippet.icon === 'javascript' ? 'text-yellow-500' : 'text-blue-700'
                            }`}>
                            {snippet.icon === 'javascript' ? <IoLogoJavascript /> : <SiTypescript />}
                            {snippet.title}
                        </h2>
                        <p className="text-lg">{snippet.description}</p>

                        <button
                            onClick={() => handleCopy(snippet.code, snippet.language || 'Code')}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Copy Code
                        </button>

                        {snippet.note && (
                            <p className="text-xl pb-2 pt-5 font-semibold text-red-400">
                                {snippet.note}
                            </p>
                        )}

                        <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                            <code>
                                {snippet.code}
                            </code>
                        </pre>
                    </section>
                );
            case 'standard':
            default:
                return (
                    <section id={key} className="mb-12" key={key}>
                        <h2 className="text-3xl font-semibold mb-4">{snippet.title || key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
                        <p className="text-lg">{snippet.description}</p>
                        {snippet.additionalDescription && (
                            <p className="text-lg mt-4">{snippet.additionalDescription}</p>
                        )}
                        <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                            <code>{snippet.code}</code>
                        </pre>
                        {snippet.additionalCode && (
                            <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                                <code>{snippet.additionalCode}</code>
                            </pre>
                        )}
                    </section>
                );
        }
    };

    return (
        <div className="p-8">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg">
                    Vite is a modern frontend build tool that offers a faster and leaner development experience for modern web projects. This documentation provides an in-depth guide to configuring Vite for your React applications.
                </p>
            </section>

            {/* Dinamik Bo'limlar */}
            {Object.entries(codeSnippets).map(([key, snippet]) => {
                if (key === 'introduction') return null;
                return renderSection(key, snippet as CodeSnippet);
            })}
        </div>
    );
};

export default DocumentationContent;
