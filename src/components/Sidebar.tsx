import React from 'react';
import { SiVite } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../types/Section';

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <div className='fixed'>
                <Link to={"/"}>
                    <h2 className="flex items-center gap-3  text-2xl font-bold mb-6">
                        <SiVite />
                        viteconfig.js
                    </h2>
                </Link>
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
        </div>
    );
};

export default Sidebar;
