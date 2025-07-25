import "./App.css";
import { Route, Routes } from "react-router-dom";
import Brand from "./pages/Brand/brand";
import Goal from "./pages/Goal/goal";
import Contact from "./pages/Contact/contact";
import Club from "./pages/Club/club";
import Home from "./pages/Home/home";
import Layout from "./components/Layout/layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>} />
      <Route path="/brand" element={<Layout> <Brand/> </Layout>}  />
      <Route path="/goal" element={<Layout> <Goal/> </Layout>}  />
      <Route path="/club" element={<Layout> <Club/> </Layout>}  />
      <Route path="/contact" element={<Layout> <Contact/> </Layout>}  />
    </Routes>
  );
}

export default App;
