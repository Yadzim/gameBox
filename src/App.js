import { Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Slider from "./pages/Slider";
import Background from "./components/ui/back";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
      }}
      onScroll={(e) => {
        console.log(e?.target?.scrollTop);
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="games/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Background/>
    </div>
  );
}

export default App;
