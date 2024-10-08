import Hero from "../components/Hero"
import Helmet from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet>
        <title>ViteConfig.js - Fast and Lightweight</title>
        <meta name="description" content="Vite is a modern frontend build tool offering a fast and lean development experience." />
        <meta name="keywords" content="Vite, React, TailwindCSS, Frontend, Build Tool" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="ViteConfig.js - Fast and Lightweight" />
        <meta property="og:description" content="Learn how to configure Vite for React projects with ease." />
        <meta property="og:image" content="vite.svg" />
        <meta property="og:url" content="https://viteconfig-js.vercel.app" />
      </Helmet>

      <Hero />

    </div>
  )
}

export default Home