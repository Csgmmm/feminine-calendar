import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import LogPeriod from "./pages/Register";
import PeriodDetails from "./pages/PeriodDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/log" element={<LogPeriod />} />
          <Route path="/period/:id" element={<PeriodDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Layout>
  );
}

//tudo o que está dentro de layout é o children (de acordo com o que está no component layout),
// portanto, consoante as páginas como children que estao dentro do pai layout,
// adiciono o que quero adicionar a cada uma

export default App;
