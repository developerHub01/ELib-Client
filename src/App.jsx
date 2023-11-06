import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <section className="w-full flex h-screen">
      <Sidebar />
      <section className="w-full overflow-y-auto">
        <Outlet />
        <Footer />
      </section>
      <ToastContainer />
    </section>
  );
}

export default App;
