import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-7xl px-4 py-6 mx-auto font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}
