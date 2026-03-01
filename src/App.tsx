import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Analyse from "./pages/Analyse";
import Register from "./pages/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <footer>Footer!</footer>
    </Layout>
  );
}

//tudo o que está dentro de layout é o children (de acordo com o que está no component layout),
// portanto, consoante as páginas como children que estao dentro do pai layout,
// adiciono o que quero adicionar a cada uma

export default App;
