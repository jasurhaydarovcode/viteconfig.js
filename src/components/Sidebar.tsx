import React from 'react';

interface SidebarProps {
    sections: { id: string; title: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-6">Vite Config Documentation</h2>
            <nav>
                <ul>
                    {sections.map((section) => (
                        <li key={section.id} className="mb-4">
                            <a
                                href={`#${section.id}`}
                                className="hover:text-blue-400 transition"
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
