import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DocumentationContent from '../components/DocumentationContent';
import Helmet from 'react-helmet';

const Documentation: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'installation', title: 'Installation' },
        { id: 'basic-configuration', title: 'Basic Configuration' },
        { id: 'plugins', title: 'Plugins' },
        { id: 'server-configuration', title: 'Server Configuration' },
        { id: 'build-options', title: 'Build Options' },
        { id: 'environment-variables', title: 'Environment Variables' },
        { id: 'aliases', title: 'Path Aliases' },
        { id: 'optimization', title: 'Optimization' },
        { id: 'deployments', title: 'Deployments' },
        { id: 'custom-plugins', title: 'Custom Plugins' },
        { id: 'ext-config-jsx', title: 'EXT config for JSX' },
        { id: 'ext-config-tsx', title: 'EXT config for TSX' }
    ];

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
                    {/* Burger tugmasi faqat mobil ekranlarda */}
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
