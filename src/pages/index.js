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

import LOGO from "/public/LOGO.png";

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
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MakeSurge | Designing & Content Creating</title>

        <meta name="name" content="Make Surge" />
        <meta name="title" content="Content Creation, Website Design and Maintenance, Video Editing, Graphic Designing, Social Media Management Services" />
        <meta name="description" content="We offer top-quality services in content creation, website design and maintenance, social media management, video editing, and graphic designing to help your business reach its full potential." />
        <meta name="keywords" content="content creation, website design, website maintenance, video editing, graphic designing, business services, social media, social media management, makesurge, content creator, MakeSurge, makesurge.co" />
        <meta name="author" content="MakeSurge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Content Creation, Website Design and Maintenance, Video Editing, Graphic Designing, Social Media Management Services" />
        <meta property="og:description" content="We offer top-quality services in content creation, website design and maintenance, video editing, social media management and graphic designing to help your business reach its full potential." />
        <meta property="og:url" content="https://www.makesurge.co" />
        <meta name="twitter:card" content={LOGO} />
        <meta name="twitter:title" content="MakeSurge | Designing & Content Creating" />
        <meta name="twitter:description" content="We offer top-quality services in content creation, website design and maintenance, social media management, video editing, and graphic designing to help your business reach its full potential." />
        <meta name="twitter:image" content="https://twitter.com/thatsmeadarsh/photo" />

        <link rel="icon" href="/LOGO.png" />
      </Head>

      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />

      {/* PRELOADING CODE */}

      {loading ? (
        <div className='loading-background'>
          <div className="loading-scene">
            <div className="loading-shadow"></div>
            <div className="loading-jumper">
              <div className="loading-spinner">
                <div className="loading-scaler">
                  <div className="loading-loader">
                    <div className="loading-cuboid">
                      <div className="loading-cuboid__side"></div>
                      <div className="loading-cuboid__side"></div>
                      <div className="loading-cuboid__side"></div>
                      <div className="loading-cuboid__side"></div>
                      <div className="loading-cuboid__side"></div>
                      <div className="loading-cuboid__side"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>

          {/* END CODE */}

          < motion.div
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
      )}

    </>
  )
}

export default App;
