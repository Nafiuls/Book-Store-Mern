import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-7xl px-4 py-6 mx-auto font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
