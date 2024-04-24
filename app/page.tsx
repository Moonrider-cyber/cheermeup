import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Comments />
      <Pricing />
      <Footer />
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}
