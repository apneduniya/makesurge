import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


const varelaRound = Varela_Round({
    weight: '400',
    subsets: ['latin'],
});

const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
});

const divVariants = {
    hidden: {
        transition: {
            staggerChildren: .2, // delay between animating children
            staggerDirection: -1, // animating children in reverse order
        },
    },
    visible: {
        transition: {
            staggerChildren: .2,
            staggerDirection: 1, // animating children in normal order,
            type: "spring"
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .22, // duration of the animation
            ease: "easeOut", // easing function
        },
    }
};

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        setIsMobile(mediaQuery.matches);

        // const listener = () => setIsMobile(mediaQuery.matches);

    }, []);

    return (
        <>
            <div
                className="home-container"
                id="home"
                style={{ margin: 0, padding: 0, position: "relative", height: "100vh", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}
            >
                <svg id="visual" viewBox="0 0 900 600" width="100%" height="100%" style={{ margin: 0, padding: 0, position: "absolute", top: 0, left: 0, zIndex: -1 }} version="1.1">
                    {/* <rect x="0" y="0" width="100%" height="100vh" fill="#ffffff"></rect> */}
                    <g fill="#6E88FE">
                        <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeOut", duration: 2.8, type: "spring", stiffness: 150 }}
                            r="115" cx="616" cy="526"></motion.circle>
                        <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeOut", duration: 2.8, type: "spring", stiffness: 150 }}
                            r="51" cx="882" cy="570"></motion.circle>
                        <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeOut", duration: 2.8, type: "spring", stiffness: 150 }}
                            r="103" cx="91" cy="12"></motion.circle>
                    </g>
                </svg>
                <div
                    className="home-intro-container"
                    style={{ margin: 0, paddingLeft: "2.4em", width: "50%" }}
                >
                    <motion.div
                        className={varelaRound.className}
                        variants={divVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >

                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Content</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >that</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} ><mark>surge</mark></motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >your</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >potential</motion.p>
                    </motion.div>
                    <motion.p
                        className={tiltNeon.className}
                        style={{ color: "#444444", margin: 0, marginTop: 24, marginBottom: 36, padding: 0, fontSize: "1.2em" }}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{once: true}}
                        transition={{ duration: 2, type: "spring" }}
                    >
                        Supercharge your brand&apos;s growth with our <mark>attention-grabbing</mark> content 📈</motion.p>
                    <Link href="#features" scroll={false} style={{margin: 0, padding: 0, textDecoration: "none"}} >
                        <motion.button
                            className={tiltNeon.className}
                            style={{ color: "#ffffff", margin: 0, marginTop: 34, padding: "12px 44px", fontSize: "1.1em", backgroundColor: "#4154F1", border: "0 solid transparent", cursor: "pointer", borderRadius: 10, boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", userSelect: "none" }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{once: false}}
                            transition={{ duration: 2, type: "spring", stiffness: 120 }}
                            whileHover={{y: -10, boxShadow: "0 7px 32px rgba(36, 56, 237, 0.4)"}}
                            whileTap={{scale: .88}}
                        >
                            Why we rock? 😎
                        </motion.button>
                    </Link>
                </div>

                {isMobile ? (
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_CveRWDFYW1.json" background="transparent" speed="1" style={{ height: 290, width: 290 }} loop autoplay></lottie-player>
                ) : (
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_CveRWDFYW1.json" background="transparent" speed="1" style={{ height: 500, width: 500 }} loop autoplay></lottie-player>
                )}
                
            </div>
        </>
    )
}

export default Home;