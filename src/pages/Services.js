import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";

// import waves from "/public/waves.svg";
// import Image from "next/image";

import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { SiSocialblade } from "react-icons/si";
import { BsFillCameraVideoFill } from "react-icons/bs";


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

const ServicesFlip = (props) => {
    return (
        <>
            <motion.div
                variants={childVariants}
                transition={{ duration: 1, type: "spring" }}
            >
                <div
                    className="services-flip-container"
                >
                    <div
                        className="services-flip-front-container"
                    >
                        { props.iconComponent }
                        <h2
                            className="services-flip-container-contents"
                            style={{ color: "#012970", fontWeight: 700, textAlign: "center", margin: 0, padding: 0, fontSize: "1.28em" }}
                        >
                            {props.frontContent}
                        </h2>
                        <div
                            className="services-flip-container-contents"
                            style={{ margin: 0, padding: "12px 12px", backgroundColor: "#012970", width: "min-content", borderRadius: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}
                        >
                            <svg width="12px" height="12px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#ffffff"></path> </g> </g></svg>
                        </div>
                    </div>
                    <div
                        className="services-flip-back-container"
                    >
                        <h2
                            className={` ${tiltNeon.className} services-flip-container-contents`}
                            style={{ color: "#444444", textAlign: "center", fontSize: "1.2em", fontWeight: 700 }}
                        >
                            {props.backContent}
                        </h2>
                    </div>
                </div>
            </motion.div>
        </>
    )
}


const Services = () => {
    return (
        <>
            <div
                className="services-container"
                id="services"
                style={{ margin: 0, padding: 0, position: "relative", height: "auto", width: "100%", display: "flex", flexDirection: "column", alignContent: "center" }}
            >
                {/* <div
                    style={{margin: 0, padding: 0, position: "absolute", top: -400, left: 0, zIndex: -9, userSelect: "none"}}
                    className="services-waves-container"
                >
                    <Image src={waves} alt="" style={{width: "100%"}}/>
                </div> */}
                <motion.div
                    className={`${varelaRound.className} services-heading-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Here&apos;s</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >what</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >we</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >provide🙃</motion.p>
                </motion.div>
                <motion.div
                    className={`${varelaRound.className} services-child-container`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <ServicesFlip iconComponent={<MdOutlineWeb style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Website Creation" backContent={<span>A Website allows you to establish an <mark>online presence</mark>, reach a <mark>wider audience</mark>, and <mark>provide information</mark> about your business, products, or services <mark>24/7</mark>. </span>} />
                    <ServicesFlip iconComponent={<MdOutlineManageSearch style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Website Management" backContent={<span>Management for your precious website ensures that your website is <mark>secure</mark>, <mark>up-to-date</mark>, and <mark>functioning properly</mark>, which can help to <mark>improve user experience, protect your brand, and boost your online presence</mark>. </span>} />
                    <ServicesFlip iconComponent={<MdOutlineQueryStats style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Content Research" backContent={<span>We ensure that your content is <mark>well-informed</mark>, <mark>accurate</mark>, and <mark>relevant</mark> to your target audience, which can <mark>increase engagement</mark> and help you to <mark>achieve your content goals</mark>. </span>} />
                    <ServicesFlip iconComponent={<AiOutlineStar style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Graphic Designing" backContent={<span>We make contents <mark>visually appealing</mark> and <mark>stand out</mark> from other content, <mark>increasing the chances of attracting viewers and engagement</mark>. </span>} />
                    <ServicesFlip iconComponent={<SiSocialblade style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Social Media Management" backContent={<span>We make strategy which help you to increase your <mark>online presence</mark>, <mark>engage with your audience</mark>, and ultimately <mark>grow</mark> your business or brand. </span>} />
                    <ServicesFlip iconComponent={<BsFillCameraVideoFill style={{ margin: 0, padding: "10px 10px", width: 50, height: 50, backgroundColor: "#012970", color: "white", borderRadius: 10 }} className="services-flip-container-contents" />} frontContent="Video Editing" backContent={<span>We can help you to create <mark>high-quality</mark>, <mark>polished video content</mark> that engages your audience and helps you to <mark>stand out</mark> on platforms like YouTube. </span>} />
                </motion.div>
            </div>
        </>
    )
}

export default Services;