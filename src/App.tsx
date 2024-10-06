import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"
import Documentation from "./routes/Documentation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App