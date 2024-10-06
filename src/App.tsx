import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App