"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} max-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About AI Universe" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text[16px] text-center
        text-secondary-white"
      >
        Welcome to <span class="bold">AI Universe</span> - Where the Stars of{" "}
        <span class="bold">Artificial Intelligence</span> Align! Explore the
        captivating world of AI through our cutting-edge{" "}
        <span class="bold">news and blogs</span>, awe-inspiring{" "}
        <span class="bold">AI-generated images</span>, interactive{" "}
        <span class="bold">AI chatbot</span>, seamless{" "}
        <span class="bold">AI-powered translation</span>, and innovative{" "}
        <span class="bold">AI-driven 3D modeling</span>. Join our community of
        AI enthusiasts and embark on a cosmic journey to uncover the secrets of
        the universe. Blast off with <span class="bold">AI Universe</span> -
        Your gateway to the AI cosmos!
      </motion.p>
      <a href="#explore">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="Arrow Down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </a>
    </motion.div>
  </section>
);

export default About;
