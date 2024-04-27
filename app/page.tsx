import Navbar from "../components/Navbar";
import MakeCheer from "../components/MakeCheer";
import Hero from "../components/Hero";
import WallOfCheer from "../components/WallOfCheer";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WallOfCheer />
      <MakeCheer />
      <Footer />
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}
