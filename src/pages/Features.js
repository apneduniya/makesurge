import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";

import { MdWatchLater } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";


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

const Features = () => {
    return (
        <>
            <div
                className="features-container"
                id="features"
                style={{ margin: 0, marginTop: 120, marginBottom: 100, padding: 0, position: "relative", height: "auto", width: "100%", display: "flex", flexDirection: "column", alignContent: "center" }}
            >
                <motion.div
                    className={`${varelaRound.className} features-heading-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Why</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >we</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >rock 😎</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >?</motion.p>
                </motion.div>

                <motion.div
                    className={`${varelaRound.className} features-child-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.div 
                        // variants={childVariants} 
                        whileHover={{ y: -40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                        className="features-card-container"
                        transition={{duration: .8, type: "spring"}}
                    >
                        <motion.div variants={childVariants} style={{ margin: 0, padding: 0, marginTop: 20, backgroundColor: "#FF8B90", height: 92, width: 92, borderRadius: 12 }}>
                            
                            <MdWatchLater style={{color: "white", width: 40, height: 40}}/>
                        
                        </motion.div>
                        <motion.div
                            variants={divVariants}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
                        >
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1.2em", color: "#012970", textAlign: "center" }} >Fast, Efficient & Reliable</motion.p>
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1em", color: "#444444", textAlign: "center" }} >Unlock your creativity with us that works as hard as you do. We deliver <mark>lightning-fasting</mark>, <mark>high-quality</mark>, <mark>tailored content</mark> specially for you.</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        // variants={childVariants} 
                        whileHover={{ y: -40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                        className="features-card-container"
                        transition={{duration: .8, type: "spring"}}
                    >
                        <motion.div variants={childVariants} style={{ margin: 0, padding: 0, marginTop: 20, backgroundColor: "#69A4FF", height: 92, width: 92, borderRadius: 12 }}>

                            <MdDesignServices style={{color: "white", width: 40, height: 40}}/>

                        </motion.div>
                        <motion.div
                            variants={divVariants}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
                        >
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1.2em", color: "#012970", textAlign: "center" }} >Accurate contents with Fabulous Design</motion.p>
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1em", color: "#444444", textAlign: "center" }} >Creating accurate content after our <mark>full research</mark> and also making it with <mark>great design</mark> is essential for you to establish trust with your audience and provide value that is <mark>informative</mark> and <mark>credible</mark>.</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        // variants={childVariants} 
                        whileHover={{ y: -40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                        className="features-card-container"
                        transition={{duration: .8, type: "spring"}}
                    >
                        <motion.div variants={childVariants} style={{ margin: 0, padding: 0, marginTop: 20, backgroundColor: "#40E5A5", height: 92, width: 92, borderRadius: 12 }}>

                            <BsCheck2All style={{color: "white", width: 40, height: 40}}/>

                        </motion.div>
                        <motion.div
                            variants={divVariants}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
                        >
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1.2em", color: "#012970", textAlign: "center" }} >Everything is covered</motion.p>
                            <motion.p variants={childVariants} className={tiltNeon.className} style={{ margin: 0, padding: 0, fontSize: "1em", color: "#444444", textAlign: "center" }} >We have got you <mark>covered from start to finish</mark>, with all the tools and resources you need to create and share high-quality content with your audience.</motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Features;