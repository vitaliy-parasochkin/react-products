import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="flex-grow p-4 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
