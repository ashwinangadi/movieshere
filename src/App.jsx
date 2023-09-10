import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import { useGlobalContext } from "./context/Context";

function App() {
  const {  showModal, setShowModal  } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Outlet />
      {showModal && <Modal />}
      <Footer />
    </>
  );
}

export default App;
