import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Examples from "./routes/Examples"
import Documentation from "./routes/Documentation"
import NotFound from "./routes/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App