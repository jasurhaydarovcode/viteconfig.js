import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DocumentationContent from '../components/DocumentationContent';
import sections from '../API/Sections.json';
import Helmet from 'react-helmet';

const Documentation: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Helmet>
                <title>Documentation</title>
            </Helmet>

            {/* Container flex */}
            <div className="flex min-h-screen lg:flex-row">
                {/* Sidebar */}
                <Sidebar sections={sections} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 bg-gray-100 overflow-auto relative">
                    {/* Button Container */}
                    <div className="fixed top-4 left-4 right-4 w-auto">
                        {/* Background for the button with blur effect */}
                        <div className="bg-gray-800 bg-opacity-10 lg:hidden backdrop-blur-md rounded-md p-2">
                            <button
                                className="p-4 text-white text-xl w-full"
                                onClick={toggleSidebar}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                    <div className='mt-16 md:mt-0'>
                        <DocumentationContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
