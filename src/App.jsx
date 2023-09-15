import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Feed from "./pages/Feed";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
