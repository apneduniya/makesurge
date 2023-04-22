import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";


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


const Contact = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path></svg>
            <div
                className="contact-container"
                id="contact"
                style={{ margin: 0, marginTop: -7, marginBottom: -160, padding: "0 40px", paddingBottom: 200, position: "relative", height: "auto", width: "100%", display: "flex", flexDirection: "column", alignContent: "center" }}
            >
                <div style={{ margin: 0, padding: 0, position: "absolute", backgroundColor: "#f3f4f5", top: 0, left: 0, height: "100%", width: "100%", zIndex: -1 }}></div>
                <motion.div
                    className={`${varelaRound.className} contact-heading-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Get</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >in</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >touch😉</motion.p>
                </motion.div>
                <motion.p
                    className={`${tiltNeon.className} contact-content`}
                    style={{ color: "#444444", margin: "auto", marginTop: 10, marginBottom: 10, padding: 0, fontSize: "1.2em" }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, type: "spring" }}
                >
                    Let&apos;s know how we could <mark>surge</mark> your brand&apos;s potential </motion.p>
                <a href="https://forms.gle/LdNrQWjWkxVznMey7" target="_blank" style={{ textDecoration: "none", margin: "auto", padding: 0 }}>
                    <motion.button
                        className={tiltNeon.className}
                        style={{ color: "#ffffff", margin: "auto", marginTop: 24, padding: "12px 44px", fontSize: "1.1em", backgroundColor: "#4154F1", border: "0 solid transparent", cursor: "pointer", borderRadius: 10, boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", userSelect: "none", width: "fit-content" }}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 2, type: "spring", stiffness: 120 }}
                        whileHover={{ y: -10, boxShadow: "0 7px 32px rgba(36, 56, 237, 0.4)" }}
                        whileTap={{ scale: .88 }}
                    >
                        Contact Us 😎
                    </motion.button>
                </a>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg> */}
        </>
    )
}

export default Contact;
