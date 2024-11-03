---
title: Default vite config
description: A guide in my new Starlight docs site.
---

## `vite.config.js` for React and JSX

When using Vite with React and JSX, the default configuration in `vite.config.js` is minimal, but it's flexible and can be customized. Here’s a basic setup for `vite.config.js` that supports React:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Adds support for React and JSX syntax
});
```
