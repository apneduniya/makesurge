import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";

// import Image from "next/image";

// import waves from "/public/waves.svg";


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


const Footer = () => {
    return (
        <>
            <svg className="footer-top-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{margin: 0, marginTop: -160, padding: 0}}>
                <path fill="#6E88FE" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div
                className="footer-container"
                style={{ margin: 0, marginTop: -5, padding: "70px 20px", position: "relative", height: "auto", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center" }}
            >
                {/* <div
                    style={{ margin: 0, padding: 0, position: "absolute", top: -430, left: 0, zIndex: -1, userSelect: "none" }}
                    className="footer-waves-container"
                >
                    <Image src={waves} alt="" style={{ width: "100%" }} />
                </div> */}
                <div style={{ margin: 0, padding: 0, position: "absolute", backgroundColor: "#6E88FE", top: 0, left: 0, height: "100%", width: "100%", zIndex: -1 }}></div>
                <motion.div
                    className={`${varelaRound.className} footer-heading-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Copyright © 2023.</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} ><mark style={{color: "#012970", padding: "0 6px"}}>makesurge.com</mark></motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >All rights reserved.</motion.p>
                </motion.div>
            </div>
        </>
    )
}

export default Footer;
