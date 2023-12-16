import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./pages/Loginpage";
import MakeAccount from "./pages/MakeAccount";
import MakeAccountV2 from "./pages/MakeAccountV2";
import SideNavbar from "./component/SideNavbar";
import SimPage from "./pages/SimPage";
import Coba from "./pages/Coba";
import Mainpage from "./pages/Mainpage";
import Tes from "./pages/Tesini";
import SimPageNew from "./pages/SimPageNew";
import SkckPage from "./pages/SkckPage";
import KritikSaran from "./pages/KritikSaran";
import Belajar from "./pages/Belajar";
import Pengmas from "./pages/Pengmas";
import Survei from "./pages/Survei";
import InfoAplikasi from "./pages/InfoAplikasi";
import Profil from "./pages/Profil";
import Notifikasi from "./pages/Notifikasi";
import Antrian from "./pages/Antrian";
import ResetPassword from "./pages/ResetPassword";
import NomorAntrian from "./pages/NomorAntrian";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Loginpage />} />
      <Route path="/Buat-akun" element={<MakeAccount />} />
      <Route path="/BuatAkun" element={<MakeAccountV2 />} />
      <Route path="/Beranda" element={<Mainpage />} />
      <Route path="/Sim" element={<SimPageNew />} />
      <Route path="/Skck" element={<SkckPage />} />
      <Route path="/KritikSaran" element={<KritikSaran />} />
      <Route path="/Pengmas" element={<Pengmas />} />
      <Route path="/Survei" element={<Survei />} />
      <Route path="/InfoAplikasi" element={<InfoAplikasi />} />
      <Route path="/Notifikasi" element={<Notifikasi />} />
      <Route path="/Profil" element={<Profil />} />
      <Route path="/Antrian" element={<Antrian />} />
      <Route path="/Antrian-anda" element={<NomorAntrian />} />

      <Route path="/Reset-sandi" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
