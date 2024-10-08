import { Helmet } from "react-helmet";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

function Examples() {
  return (
    <div>
      <Helmet>
        <title>Examples - ViteConfig.js Code Examples</title>
        <meta name="description" content="Explore practical Vite configuration examples for React projects with TailwindCSS integration." />
        <meta name="keywords" content="Vite examples, React, TailwindCSS, Vite config examples, frontend development" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Examples - ViteConfig.js Code Examples" />
        <meta property="og:description" content="A collection of Vite configuration examples with React and TailwindCSS for modern frontend development." />
        <meta property="og:image" content="link_to_your_examples_image.png" />
        <meta property="og:url" content="https://viteconfig-js.vercel.app/examples" />
        <link rel="canonical" href="https://viteconfig-js.vercel.app/examples" />
      </Helmet>

      <div className="container md:px-0 px-4">
        <Link to={"/"} className="fixed top-1 left-4 right-4 w-auto">
          <div className="flex items-center gap-4 text-xl my-6 md:w-max w-auto bg-gray-800 bg-opacity-10 backdrop-blur-sm py-2 px-2 rounded-md transition duration-100 ease-in-out">
            <IoMdExit />
            Back home
          </div>
        </Link>

        <div className="mt-20">
          {/* Example components */}
          <h1 className="text-3xl font-bold mb-6">Examples</h1>

          {/* First Example: TailwindCSS Integration */}
          <h2 className="text-2xl font-semibold mb-4">TailwindCSS Integration</h2>
          <p className="mb-4">
            Below is an example of how to integrate TailwindCSS into a Vite project:
          </p>
          <div className="bg-gray-800 text-white p-4 rounded mb-8 overflow-x-auto">
            <pre>
              <code className="whitespace-pre">
                {`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
              </code>
            </pre>
          </div>

          {/* Second Example: ViteConfig Customization */}
          <h2 className="text-2xl font-semibold mb-4">ViteConfig Customization</h2>
          <p className="mb-4">
            Here is a Vite config customization for including specific plugins:
          </p>
          <div className="bg-gray-800 text-white p-4 rounded mb-8 overflow-x-auto">
            <pre>
              <code className="whitespace-pre">
                {`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
});`}
              </code>
            </pre>
          </div>

          {/* Third Example: Alias Setup */}
          <h2 className="text-2xl font-semibold mb-4">Alias Setup</h2>
          <p className="mb-4">
            You can set up aliases in your Vite project to shorten import paths:
          </p>
          <div className="bg-gray-800 text-white p-4 rounded mb-8 overflow-x-auto">
            <pre>
              <code className="whitespace-pre">
                {`import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});`}
              </code>
            </pre>
          </div>

          {/* Fourth Example: Environment Variables */}
          <h2 className="text-2xl font-semibold mb-4">Using Environment Variables</h2>
          <p className="mb-4">
            Below is an example of how to use environment variables in Vite:
          </p>
          <div className="bg-gray-800 text-white p-4 rounded mb-8 overflow-x-auto">
            <pre>
              <code className="whitespace-pre">
                {`// .env file
VITE_API_URL=https://api.example.com

// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
});

// Usage in your code
console.log(import.meta.env.VITE_API_URL);`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples;
