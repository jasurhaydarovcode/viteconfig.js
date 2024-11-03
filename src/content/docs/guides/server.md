---
title: Server Configuration
description: A guide in my new Starlight docs site.
---

When using Vite with React and JSX, the default configuration in `vite.config.js` is minimal but can be customized for your development needs. Below is a basic setup for `vite.config.js` that supports React and includes a detailed explanation of the `server` configuration.

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Adds support for React and JSX syntax

  // Server configuration for local development
  server: {
    host: '0.0.0.0',   // Allows the server to be accessible from any IP address
    open: true,        // Automatically opens the app in the browser when the server starts
    port: 3000,       // Sets the development server to run on port 3000
    strictPort: false, // If true, the server will fail to start if the specified port is already in use
    hmr: {
      overlay: true,    // Displays a full-screen overlay in the browser for hot module replacement (HMR) errors
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Proxies requests starting with /api to another server
        changeOrigin: true,               // Changes the origin of the host header to the target URL
      },
    },
  },
});
```

### Explanation of the Server Configuration

1. **`host`**:
    - **Type**: `string`
    - **Default**: `'localhost'`
    - **Description**: Setting this to `'0.0.0.0'` makes your Vite development server accessible from any IP address on your local network. This is useful for testing on multiple devices, such as mobile phones or tablets, connected to the same network. By default, the server only listens on `localhost`, which restricts access to the local machine.

2. **`open`**:
    - **Type**: `boolean`
    - **Default**: `false`
    - **Description**: Setting this to `true` automatically opens your default web browser to the specified port when the server starts. This is a time-saver, allowing you to quickly view your application without manual navigation.

3. **`port`**:
    - **Type**: `number`
    - **Default**: `3000`
    - **Description**: This option specifies the port number on which the development server will run. You can customize this to avoid conflicts with other running services.

4. **`strictPort`**:
    - **Type**: `boolean`
    - **Default**: `false`
    - **Description**: When set to `true`, the server will fail to start if the specified port is already in use. This ensures that your application consistently runs on the intended port and can help you identify conflicts.

5. **`hmr` (Hot Module Replacement)**:
    - **Type**: `object | boolean`
    - **Default**: `true`
    - **Description**: This feature allows you to update modules in your application without a full page reload. The `overlay` option, when set to `true`, shows a full-screen error overlay in the browser for any issues related to HMR. If you prefer not to see this overlay, set it to `false`.

6. **`proxy`**:
    - **Type**: `object`
    - **Description**: The `proxy` option lets you define proxy rules for your development server. This is especially useful for handling API requests when your frontend and backend are hosted on different servers, helping to avoid CORS issues.
    - **Example Configuration**:
      ```js
      proxy: {
        '/api': {
          target: 'http://localhost:5000', // The URL to proxy requests to
          changeOrigin: true,               // Changes the origin of the host header to the target URL
        },
      },
      ```
