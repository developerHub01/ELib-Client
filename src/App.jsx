import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <section className="w-full overflow-y-auto">
        <Outlet />
        <Footer />
      </section>
    </section>
  );
}

export default App;
