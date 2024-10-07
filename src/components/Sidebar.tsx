import React from 'react';
import { SiVite } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../types/Section';
import { IoMdExit } from 'react-icons/io';

interface SidebarComponentProps extends SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarComponentProps> = ({ sections, isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Overlay (qoraytirish) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" // Kompyuterda ko'rinmasin
                    onClick={toggleSidebar}
                ></div>
            )}
            <div
                className={`fixed top-0 left-0 w-80 bg-gray-800 text-white h-full p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:flex-shrink-0 lg:static lg:h-auto`} // Sidebarni har doim ko'rinadigan qilib sozlash
            >
                <button
                    onClick={toggleSidebar}
                    className="text-white text-2xl absolute right-4 top-4 lg:hidden"
                >
                    ✕
                </button>
                {/* <Link to={"/"}>
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                        <SiVite />
                        viteconfig.js
                    </h2>
                </Link> */}
                {/* Navigatsiya qismini sticky qilib qo'yish */}
                <nav className="sticky top-16 overflow-y-auto">
                    <ul>
                        <div className='-mt-8'>

                            <Link to={"/"}>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                                    <SiVite />
                                    viteconfig.js
                                </h2>
                            </Link>
                        </div>
                        <Link to={"/"}>
                            <li className='mb-4 text-xl font-semibold flex items-center gap-3 hover:text-blue-400'>
                                <IoMdExit /> Back Home
                            </li>
                        </Link>
                        {sections.map((section) => (
                            <li key={section.id} className="mb-4">
                                <a
                                    href={`#${section.id}`}
                                    className="hover:text-blue-400 transition"
                                    onClick={toggleSidebar}
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
