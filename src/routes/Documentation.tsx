import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DocumentationContent from '../components/DocumentationContent';
import sections from '../API/Sections.json'
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
                <div className="flex-1 bg-gray-100 overflow-auto">
                    {/* Burger BTN for mobile responsive */}
                    <button
                        className="p-4 m-4 bg-gray-800 text-white lg:hidden"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                    <DocumentationContent />
                </div>
            </div>
        </div>
    );
};

export default Documentation;
