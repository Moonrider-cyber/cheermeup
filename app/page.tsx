"use client";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function Home() {

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data.message);
      };
  
      fetchData();
    }, []);

  return (
    <>

      <Navbar />
      <Hero />
      <Comments />
      <Pricing />
      <Footer />
    </>
  );
}
