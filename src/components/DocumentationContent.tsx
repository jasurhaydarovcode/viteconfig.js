import React from 'react';

const DocumentationContent: React.FC = () => {
    return (
        <div className="p-8">
            <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg">
                    Vite is a modern frontend build tool that offers a faster and leaner development experience for modern web projects. This documentation provides an in-depth guide to configuring Vite for your React applications.
                </p>
            </section>

            <section id="installation" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Installation</h2>
                <p className="text-lg">
                    To get started with Vite, you can install it using npm or yarn:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}
                    </code>
                </pre>
            </section>

            <section id="basic-configuration" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Basic Configuration</h2>
                <p className="text-lg">
                    The basic Vite configuration file (`vite.config.js`) is used to define how Vite behaves during development and build processes. Here's an example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`}
                    </code>
                </pre>
            </section>

            <section id="plugins" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Plugins</h2>
                <p className="text-lg">
                    Vite supports a variety of plugins to extend its functionality. For React projects, the official React plugin is commonly used:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`}
                    </code>
                </pre>
                <p className="text-lg mt-4">
                    You can add other plugins as needed. For example, to add support for Vue:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})`}
                    </code>
                </pre>
            </section>

            <section id="server-configuration" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Server Configuration</h2>
                <p className="text-lg">
                    You can customize the development server settings in Vite. For example, to change the host and port:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`export default defineConfig({
  server: {
    host: true,
    port: 4000,
  },
})`}
                    </code>
                </pre>
            </section>

            <section id="build-options" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Build Options</h2>
                <p className="text-lg">
                    Vite offers various build options to optimize your production build. For example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
  },
})`}
                    </code>
                </pre>
            </section>

            <section id="environment-variables" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Environment Variables</h2>
                <p className="text-lg">
                    Vite supports environment variables that can be accessed within your application. To define them, create `.env` files:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`// .env
VITE_API_URL=https://api.example.com`}
                    </code>
                </pre>
                <p className="text-lg mt-4">
                    Access them in your code using `import.meta.env`:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`const apiUrl = import.meta.env.VITE_API_URL`}
                    </code>
                </pre>
            </section>

            <section id="aliases" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Path Aliases</h2>
                <p className="text-lg">
                    Simplify import paths by defining aliases in your Vite configuration:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})`}
                    </code>
                </pre>
            </section>

            <section id="optimization" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Optimization</h2>
                <p className="text-lg">
                    Optimize dependencies and build performance:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`export default defineConfig({
  optimizeDeps: {
    include: ['some-package'],
    exclude: ['another-package'],
  },
})`}
                    </code>
                </pre>
            </section>

            <section id="deployments" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Deployments</h2>
                <p className="text-lg">
                    Configure build settings suitable for your deployment environment:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`export default defineConfig({
  base: '/my-app/',
  build: {
    outDir: 'build',
  },
})`}
                    </code>
                </pre>
            </section>

            <section id="custom-plugins" className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Custom Plugins</h2>
                <p className="text-lg">
                    Create and integrate custom plugins to extend Vite's functionality:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-x-auto">
                    <code>
                        {`import { defineConfig } from 'vite'

function myCustomPlugin() {
  return {
    name: 'my-custom-plugin',
    transform(src, id) {
      // Custom transformation logic
      return src
    },
  }
}

export default defineConfig({
  plugins: [myCustomPlugin()],
})`}
                    </code>
                </pre>
            </section>
        </div>
    );
};

export default DocumentationContent;
