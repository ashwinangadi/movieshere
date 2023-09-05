import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <MoviePage /> */}
      <Footer />
    </>
  );
}

export default App;
