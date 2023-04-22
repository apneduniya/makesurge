import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import Navbar from './Navbar';
import Home from './Home';
import Features from './Features';
import Services from './Services';
import Contact from './Contact';

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

const App = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <Head>
        <title>MakeSurge</title>
        <meta name="description" content="Make Surge" />
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
