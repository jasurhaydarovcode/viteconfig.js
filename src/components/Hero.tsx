import React, { useState } from 'react';
import ViteLogoSvg from '../assets/vite.svg';
import { Link } from 'react-router-dom';
import CopyButton from './CopyButton';
import GitHubButton from 'react-github-btn';

const Hero: React.FC = () => {
    const [showAlternateConfig, setShowAlternateConfig] = useState(false);

    const handleToggleConfig = () => {
        setShowAlternateConfig(!showAlternateConfig);
    };

    const defaultConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`;

    const alternateConfig = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 4000,
  },
  build: {
    target: 'esnext',
  },
})`;

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <GitHubButton
                    // className="self-center"
                    href="https://github.com/jasurhaydarovcode/viteconfig.js"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star jasurhaydarovcode/viteconfig.js on GitHub"
                >
                    Star on Github
                </GitHubButton>
                <div className="flex py-10 items-center flex-col sm:flex-row">
                    <img className="w-24 sm:w-32 mb-4 sm:mb-0" src={ViteLogoSvg} alt="Vite Logo" />
                    <h1 className="text-4xl sm:text-6xl font-bold">viteconfig.js</h1>
                </div>

                <div className="relative w-11/12 max-w-4xl">
                    <CopyButton textToCopy={defaultConfig} /> {/* Use the CopyButton */}
                    <pre className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-sm sm:text-base overflow-x-auto break-all">
                        <code>{defaultConfig}</code>
                    </pre>
                </div>

                <button
                    onClick={handleToggleConfig}
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    {showAlternateConfig ? 'Hide Alternate Config' : 'Show Alternate Config'}
                </button>

                {showAlternateConfig && (
                    <div className="relative w-11/12 max-w-4xl mt-4">
                        <CopyButton textToCopy={alternateConfig} /> {/* Use the CopyButton */}
                        <pre className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-sm sm:text-base overflow-x-auto break-all">
                            <code>{alternateConfig}</code>
                        </pre>
                    </div>
                )}

                <div className='flex items-center gap-5'>
                    <Link
                        to={"/documentation"}
                        rel="noopener noreferrer"
                        className="mt-6 text-blue-500 underline hover:text-blue-700 transition"
                    >
                        Documentation
                    </Link>

                    <Link
                        to={"/examples"}
                        rel="noopener noreferrer"
                        className="mt-6 text-blue-500 underline hover:text-blue-700 transition"
                    >
                        Examples
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
