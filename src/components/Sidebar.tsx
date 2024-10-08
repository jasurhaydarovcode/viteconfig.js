import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../types/Section';
import { IoMdExit } from 'react-icons/io';
import viteLogo from '../assets/vite.svg';

interface SidebarComponentProps extends SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarComponentProps> = ({ sections, isOpen, toggleSidebar }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId);
        toggleSidebar();
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
            <div
                className={`fixed top-0 left-0 w-80 bg-gray-800 text-white h-full p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:flex-shrink-0 lg:static lg:h-auto`}
            >
                <button
                    onClick={toggleSidebar}
                    className="text-white text-2xl absolute right-4 top-4 lg:hidden"
                >
                    ✕
                </button>
                <nav className="sticky top-16 overflow-y-auto">
                    <ul>
                        <div>
                            {/* <Link to={"/"}> */}
                            <h2 className="flex bg-gradient-to-r from-purple-500 via-yellow-500 to-indigo-400 text-transparent bg-clip-text items-center gap-3 text-2xl font-bold mb-6">
                                <div className='text-white'>
                                    <img src={viteLogo} className='w-6' alt="Vite Logo" />
                                </div>
                                viteconfig.js
                            </h2>
                            {/* </Link> */}
                        </div>
                        <Link to={"/"}>
                            <li className='mb-4 text-xl font-semibold flex items-center gap-3 hover:text-blue-400'>
                                <IoMdExit /> Back Home
                            </li>
                        </Link>
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                className={`mb-4 ${activeSection === section.id ? 'text-blue-400 font-bold' : 'hover:text-blue-400'
                                    } transition`}
                            >
                                <a
                                    href={`#${section.id}`}
                                    onClick={() => handleSectionClick(section.id)}
                                >
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
