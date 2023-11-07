import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

function App() {
  return (
    <section className="w-full flex h-screen bg-white dark:bg-gray-900">
      <Sidebar />
      <section className="w-full overflow-y-auto">
        <Outlet />
        <Footer />
      </section>
      <Loader />
      <ToastContainer />
    </section>
  );
}

export default App;
