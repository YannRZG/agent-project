import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainGrid from "./components/MainGrid";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Calculator from "./pages/Calculator"
import Farming from "./pages/Farming"
import Daily from "./pages/Daily"
import Monthly from "./pages/Monthly"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainGrid />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/farming" element={<Farming />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

