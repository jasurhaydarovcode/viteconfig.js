import Hero from "../components/Hero"
import Helmet from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet>
        <title>viteconfig.js</title>
      </Helmet>

      <Hero />

    </div>
  )
}

export default Home