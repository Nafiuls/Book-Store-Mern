import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main className="min-h-screen max-w-7xl px-4 py-6 mx-auto">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
