import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import Navbar from './Navbar';
import Home from './Home';
import Features from './Features';
import Services from './Services';
import Contact from './Contact';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

const useFollowPointer = (ref) => {
  const [point, setPoint] = useState({ x: 100, y: 400 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

const App = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <Head>
        <title>MakeSurge</title>
        <meta name="name" content="Make Surge" />
        <meta name="description" content="Make Surge" />
        <meta name="description" content="content creator, social media, website creator, manager, website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />

      <motion.div
        ref={ref}
        animate={{ x, y }}
        className='mouse-listener'
        style={{
          width: 150,
          height: 150,
          borderRadius: "100%",
          background: "#6E88FE",
          position: "fixed",
        }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
      />

      <Navbar />
      <Home />
      <Features />
      <Services />
      <Contact />
      <Footer />

    </>
  )
}

export default App;
