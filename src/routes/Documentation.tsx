import React from 'react';
import Sidebar from '../components/Sidebar';
import DocumentationContent from '../components/DocumentationContent';

const Documentation: React.FC = () => {
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
    ];

    return (
        <div className="flex min-h-screen">
            <Sidebar sections={sections} />
            <main className="flex-1 bg-gray-100 overflow-auto">
                <DocumentationContent />
            </main>
        </div>
    );
};

export default Documentation;
